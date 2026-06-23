"""
Gera assets/images/og-cover.png (1200x630) para preview social.
Requer: pip install pillow
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
BG      = (10, 12, 16)      # --clr-bg
ACCENT  = (0, 212, 170)     # --clr-accent #00D4AA
WARM    = (245, 158, 11)    # --clr-warm   #F59E0B
MUTED   = (100, 116, 139)
WHITE   = (248, 250, 252)

img  = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# Accent bar top
draw.rectangle([0, 0, W, 4], fill=ACCENT)

# Decorative dots (right side)
dots = [(980, 160), (1040, 200), (1000, 260), (1060, 300), (970, 330)]
for cx, cy in dots:
    r = 5
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=ACCENT + (180,))

# Try to load JetBrains Mono; fallback to default
font_paths = [
    "C:/Users/vmitt/AppData/Local/Microsoft/Windows/Fonts/JetBrainsMono-Regular.ttf",
    "C:/Windows/Fonts/consola.ttf",
    "C:/Windows/Fonts/cour.ttf",
]
mono_path = next((p for p in font_paths if os.path.exists(p)), None)

try:
    font_mono_sm = ImageFont.truetype(mono_path, 20) if mono_path else ImageFont.load_default()
    font_name    = ImageFont.truetype(mono_path, 72) if mono_path else ImageFont.load_default()
    font_title   = ImageFont.truetype(mono_path, 32) if mono_path else ImageFont.load_default()
    font_sub     = ImageFont.truetype(mono_path, 22) if mono_path else ImageFont.load_default()
    font_tag     = ImageFont.truetype(mono_path, 18) if mono_path else ImageFont.load_default()
except Exception:
    font_mono_sm = font_name = font_title = font_sub = font_tag = ImageFont.load_default()

# Eyebrow
draw.text((80, 140), "Data Analyst", font=font_mono_sm, fill=ACCENT)

# Name
draw.text((80, 175), "Victor Mittestainer", font=font_name, fill=WHITE)

# Tagline
draw.text((80, 270), "Turning support noise into data clarity.", font=font_title, fill=MUTED)

# Divider line
draw.rectangle([80, 330, 380, 332], fill=ACCENT)

# Stats
stats = [
    ("7+",  "Years in Operations"),
    ("5",   "Years in the US"),
    ("40%", "SLA breach reduction"),
]
x = 80
for val, label in stats:
    draw.text((x, 355), val,   font=font_title, fill=ACCENT)
    draw.text((x, 398), label, font=font_tag,   fill=MUTED)
    x += 220

# Stack tags
tags = ["Power BI", "DAX", "SQL", "Python", "Power Automate"]
tx, ty = 80, 470
for tag in tags:
    tw = draw.textlength(tag, font=font_tag)
    pad = 12
    draw.rounded_rectangle([tx-pad, ty-6, tx+tw+pad, ty+26], radius=4, fill=(20, 24, 32))
    draw.text((tx, ty), tag, font=font_tag, fill=WHITE)
    tx += int(tw) + pad*2 + 8

# URL bottom right
url = "vmittestainer.github.io"
uw = draw.textlength(url, font=font_mono_sm)
draw.text((W - uw - 80, H - 60), url, font=font_mono_sm, fill=MUTED)

out = "assets/images/og-cover.png"
os.makedirs(os.path.dirname(out), exist_ok=True)
img.save(out, "PNG", optimize=True)
print(f"Saved: {out}  ({W}x{H})")
