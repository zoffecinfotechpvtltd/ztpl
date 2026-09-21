"""Favicons / app icons: the ZTPL mark on a rounded Ink tile, RGBA with transparent corners, crisp at every size."""
from PIL import Image, ImageDraw, ImageFilter

mark = Image.open("public/logo-mark.png").convert("RGBA")


def tile(size: int, radius: float, inset: float, border: bool = True) -> Image.Image:
    ss = 4  # supersample so the curved edge is anti-aliased
    s = size * ss
    base = Image.new("RGBA", (s, s), (0, 0, 0, 0))

    # tile: Ink with a very soft emerald lift toward the top
    body = Image.new("RGBA", (s, s), (11, 13, 17, 255))
    glow = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((s * 0.05, -s * 0.5, s * 0.95, s * 0.4), fill=(0, 210, 106, 60))
    glow = glow.filter(ImageFilter.GaussianBlur(s * 0.12))
    body.alpha_composite(glow)

    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, s - 1, s - 1), radius=int(s * radius), fill=255)
    base.paste(body, (0, 0), mask)

    if border and size >= 64:
        ring = Image.new("RGBA", (s, s), (0, 0, 0, 0))
        ImageDraw.Draw(ring).rounded_rectangle(
            (ss, ss, s - 1 - ss, s - 1 - ss), radius=int(s * radius), outline=(255, 255, 255, 28), width=ss * 2
        )
        base.alpha_composite(ring)

    side = int(s * (1 - 2 * inset))
    mk = mark.copy()
    mk.thumbnail((side, side), Image.LANCZOS)
    base.alpha_composite(mk, ((s - mk.width) // 2, (s - mk.height) // 2))
    return base.resize((size, size), Image.LANCZOS)


# Browser tab / PWA icon: curved (squircle-ish) tile, transparent corners
tile(512, 0.22, 0.15).save("src/app/icon.png", optimize=True)

# iOS applies its own rounded mask, so give it a full-bleed opaque square
sq = tile(180, 0.0, 0.16, border=False)
opaque = Image.new("RGB", sq.size, (11, 13, 17))
opaque.paste(sq, (0, 0), sq)
opaque.save("src/app/apple-icon.png", optimize=True)

# Multi-size .ico. Tiny sizes get a bigger mark so it stays legible.
frames = [tile(n, 0.22, 0.16 if n >= 48 else 0.07) for n in (16, 32, 48, 64)]
biggest = tile(256, 0.22, 0.15)
biggest.save("src/app/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)], append_images=frames)

for f in ("src/app/icon.png", "src/app/apple-icon.png", "src/app/favicon.ico"):
    im = Image.open(f)
    print(f, im.size, im.mode)

# preview: the tab icon at real sizes on a browser-ish strip
prev = Image.new("RGB", (620, 200), (32, 33, 36))
x = 20
for n in (16, 32, 48, 64, 96, 128):
    t = tile(n, 0.22, 0.16 if n >= 48 else 0.07)
    prev.paste(t, (x, 20), t)
    x += n + 24
big = tile(180, 0.22, 0.15)
prev.paste(big, (430, 10), big)
prev.save(".scratch/icon-preview.png")
