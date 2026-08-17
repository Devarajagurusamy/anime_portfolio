import os
from PIL import Image, ImageFilter
import numpy as np

src = r'C:\Users\Devaraj\.gemini\antigravity-ide\brain\5295e71c-8018-48c0-a3a6-517ef153beac\.user_uploaded\media_1786964057190.jpg'
out_path = r'c:\Users\Devaraj\Desktop\anime_portfolio\public\assets\character.png'

img = Image.open(src).convert('RGBA')
arr = np.array(img)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
brightness = np.maximum(r, np.maximum(g, b))

# Clean alpha mask for character silhouette
char_mask = (brightness > 8).astype(np.uint8) * 255
mask_img = Image.fromarray(char_mask).filter(ImageFilter.GaussianBlur(0.8))

img.putalpha(mask_img)
img.save(out_path)
print(f'Saved high-res character image to {out_path} ({img.size})')
