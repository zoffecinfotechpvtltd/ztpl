"""Run from the repo root: python scripts/brand-logos.py, then python scripts/brand-icons.py.

Cut the ZTPL logo and mark out of their dark backdrops, keeping the true brand colours.

alpha  = smoothstep on the brightest channel (kills the glow haze and film grain, keeps anti-aliased edges)
colour = observed pixel with the ~black backdrop subtracted back out, so the greens/yellows are not brightened
"""
from PIL import Image

LO, HI = 42, 120      # brightness range that ramps alpha 0 -> 1
BG = 8                # approximate backdrop level to subtract at edges


def key(im: Image.Image) -> Image.Image:
    im = im.convert("RGB")
    w, h = im.size
    src = im.load()
    out = Image.new("RGBA", (w, h))
    px = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = src[x, y]
            m = max(r, g, b)
            t = (m - LO) / (HI - LO)
            if t <= 0:
                continue
            t = min(1.0, t)
            a = t * t * (3 - 2 * t)
            if a >= 0.999:
                px[x, y] = (r, g, b, 255)
            else:
                c = [max(0, min(255, int((v - (1 - a) * BG) / a))) for v in (r, g, b)]
                px[x, y] = (c[0], c[1], c[2], int(a * 255))
    return out


def tight(im: Image.Image, pad=6, thresh=24) -> Image.Image:
    bb = im.getchannel("A").point(lambda v: 255 if v > thresh else 0).getbbox()
    l, t, r, b = bb
    return im.crop((max(l - pad, 0), max(t - pad, 0), min(r + pad, im.width), min(b + pad, im.height)))


# ---- horizontal lockup -------------------------------------------------------------
h = key(Image.open("public/horizontallogo.png"))
print("keyed lockup", h.size)

# header version: erase the tagline (illegible at header size; rendered as live text instead), keep mark + ZTPL
hp = h.copy()
p = hp.load()
for y in range(575, 660):           # tagline rows, right of the mark
    for x in range(650, hp.width):
        p[x, y] = (0, 0, 0, 0)
head = tight(hp)
head.thumbnail((900, 900), Image.LANCZOS)
head.save("public/logo-header.png", optimize=True)
print("logo-header", head.size)

# ---- the mark on its own ------------------------------------------------------------
m = key(Image.open("public/icon-mark.png"))
mark = tight(m, pad=8)
mark.thumbnail((640, 640), Image.LANCZOS)
mark.save("public/logo-mark.png", optimize=True)
print("logo-mark", mark.size)

# ---- favicon / app icons: the mark on Ink, square -----------------------------------
def on_ink(img: Image.Image, size: int, inset: float) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (11, 13, 17, 255))
    side = int(size * (1 - 2 * inset))
    mk = img.copy()
    mk.thumbnail((side, side), Image.LANCZOS)
    canvas.alpha_composite(mk, ((size - mk.width) // 2, (size - mk.height) // 2))
    return canvas.convert("RGB")

on_ink(mark, 512, 0.14).save("src/app/icon.png", optimize=True)
on_ink(mark, 180, 0.14).save("src/app/apple-icon.png", optimize=True)
on_ink(mark, 64, 0.08).save("src/app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print("icons written")

# preview sheet: each on Ink and Slate so edges/halos can be judged
sheet = Image.new("RGB", (1500, 620), (11, 13, 17))
sheet.paste((18, 22, 28), (0, 310, 1500, 620))
for i, (im, x) in enumerate(((head, 30), (mark, 1290))):
    for row, y in enumerate((30, 340)):
        t = im.copy()
        t.thumbnail((560 if i < 2 else 180, 260), Image.LANCZOS)
        sheet.paste(t, (x, y), t)
sheet.save(".scratch/logo-preview.png")
