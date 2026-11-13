import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

def grade_portrait(input_path, output_path):
    # Load original image
    img = Image.open(input_path).convert('RGB')
    w, h = img.size
    
    # Convert to float numpy array
    arr = np.array(img, dtype=np.float32) / 255.0

    # 1. Luminance calculation (Rec. 709)
    lum = 0.2126 * arr[:, :, 0] + 0.7152 * arr[:, :, 1] + 0.0722 * arr[:, :, 2]
    lum = np.expand_dims(lum, axis=2)

    # 2. S-Curve contrast tonemapping
    # Gentle sigmoidal S-curve to add editorial punch while preserving delicate highlight/shadow detail
    arr_contrast = np.where(arr < 0.5, 
                            2 * (arr ** 1.3), 
                            1 - 2 * ((1 - arr) ** 1.3))
    arr = 0.4 * arr + 0.6 * arr_contrast
    arr = np.clip(arr, 0.0, 1.0)

    # 3. Theme Color Grading:
    # Warm Ivory: (245/255, 243/255, 238/255)
    # Charcoal: (32/255, 33/255, 31/255)
    # Muted Olive: (119/255, 124/255, 98/255)
    # Burnt Orange: (196/255, 107/255, 69/255)
    
    # Shadow Color Grading (lift crushed blacks into rich luxury charcoal #20211F with olive undertone)
    shadow_mask = np.clip((0.35 - lum) / 0.35, 0.0, 1.0)
    shadow_tint = np.array([32/255.0, 34/255.0, 31/255.0])
    arr = arr * (1.0 - 0.25 * shadow_mask) + (shadow_tint * 0.25 * shadow_mask)

    # Midtone & Highlight Grading (infuse warm skin tones and Burnt Orange / Ivory amber rim)
    # Burnt orange warm glow in upper midtones/highlights:
    highlight_mask = np.clip((lum - 0.3) / 0.7, 0.0, 1.0)
    warm_tint = np.array([1.06, 0.98, 0.91]) # Boost warm red/amber, soften harsh cool blue
    arr = arr * (1.0 - 0.3 * highlight_mask) + (arr * warm_tint * 0.3 * highlight_mask)

    # Olive accent in deep midtones for that high-end Awwwards studio editorial look
    olive_mask = np.clip(1.0 - np.abs(lum - 0.4) / 0.3, 0.0, 1.0)
    olive_tint = np.array([119/255.0, 124/255.0, 98/255.0])
    arr = arr * (1.0 - 0.12 * olive_mask) + (arr * olive_tint * 1.8 * 0.12 * olive_mask)

    # 4. Subtle Radial Vignette (seamless blend into charcoal at edges, focuses attention on Sachi)
    y, x = np.ogrid[:h, :w]
    cx, cy = w / 2.0, h * 0.42 # centered slightly higher towards face
    dist = np.sqrt(((x - cx) / (w * 0.65)) ** 2 + ((y - cy) / (h * 0.75)) ** 2)
    vignette = np.clip(1.0 - (dist ** 2) * 0.45, 0.15, 1.0)
    vignette = np.expand_dims(vignette, axis=2)
    arr = arr * vignette + (1.0 - vignette) * np.array([22/255.0, 23/255.0, 21/255.0])

    # 5. Very subtle filmic editorial grain (reduces plastic digital look, adds texture)
    np.random.seed(42)
    noise = np.random.normal(0.0, 0.015, arr.shape)
    arr = arr + noise
    arr = np.clip(arr, 0.0, 1.0)

    # Convert back to PIL
    result = Image.fromarray((arr * 255.0).astype(np.uint8))

    # 6. Sharpness enhancement on facial features and clothing
    enhancer = ImageEnhance.Sharpness(result)
    result = enhancer.enhance(1.35)

    # 7. Subtle color vibrance balance
    color_enhancer = ImageEnhance.Color(result)
    result = color_enhancer.enhance(1.08)

    # Save high quality JPEG with optimization
    result.save(output_path, "JPEG", quality=95, optimize=True)
    print(f"Successfully graded portrait saved to: {output_path}")

if __name__ == "__main__":
    grade_portrait("D:/c data/Desktop/React/myportfolio/public/profile-original.jpg", 
                   "D:/c data/Desktop/React/myportfolio/public/profile-themed.jpg")
    grade_portrait("D:/c data/Desktop/React/myportfolio/public/profile-original.jpg", 
                   "D:/c data/Desktop/React/myportfolio/public/profile.jpg")
