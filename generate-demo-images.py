#!/usr/bin/env python3
"""
Generate lightweight WEBP demo images for Image, Card, and ImageGallery components.
Creates images optimized for web with file sizes under 50KB.
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create output directory
output_dir = "public/demo-images"
os.makedirs(output_dir, exist_ok=True)

# Color palettes for different themes/categories
themes = {
    "landscape": {
        "colors": ["#87CEEB", "#90EE90", "#FFD700", "#FF6B6B"],
        "label": "Landscape",
    },
    "urban": {
        "colors": ["#404040", "#808080", "#E8E8E8", "#FF4500"],
        "label": "Urban",
    },
    "nature": {
        "colors": ["#228B22", "#32CD32", "#8B4513", "#DAA520"],
        "label": "Nature",
    },
    "ocean": {
        "colors": ["#000080", "#0047AB", "#00CED1", "#F0F8FF"],
        "label": "Ocean",
    },
    "sunset": {
        "colors": ["#FF7F50", "#FF6347", "#FFD700", "#FF8C00"],
        "label": "Sunset",
    },
    "forest": {
        "colors": ["#2D5016", "#3D6B2E", "#7CFC00", "#DAA520"],
        "label": "Forest",
    },
}

image_configs = [
    # Gallery images (640x480 - 4:3 ratio, 2x resolution)
    ("gallery-1", 640, 480, "landscape"),
    ("gallery-2", 640, 480, "urban"),
    ("gallery-3", 640, 480, "nature"),
    ("gallery-4", 640, 480, "ocean"),
    ("gallery-5", 640, 480, "sunset"),
    ("gallery-6", 640, 480, "forest"),
    # Card images (800x400 - 2:1 ratio, 2x resolution)
    ("card-1", 800, 400, "landscape"),
    ("card-2", 800, 400, "urban"),
    ("card-3", 800, 400, "nature"),
    ("card-4", 800, 400, "ocean"),
    # Large/detail images (1300x976 - golden ratio-ish, 2x resolution)
    ("detail-1", 1300, 976, "landscape"),
    ("detail-2", 1300, 976, "sunset"),
]

for image_name, width, height, theme in image_configs:
    # Create image with gradient
    img = Image.new("RGB", (width, height), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)

    theme_info = themes[theme]
    colors = theme_info["colors"]
    label = theme_info["label"]

    # Create gradient background
    for y in range(height):
        # Interpolate between two colors
        ratio = y / height
        color_idx = int(ratio * (len(colors) - 1))
        next_idx = min(color_idx + 1, len(colors) - 1)
        
        current_color = colors[color_idx]
        next_color = colors[next_idx]
        
        # Convert hex to RGB
        curr_rgb = tuple(int(current_color.lstrip("#")[i:i+2], 16) for i in (0, 2, 4))
        next_rgb = tuple(int(next_color.lstrip("#")[i:i+2], 16) for i in (0, 2, 4))
        
        # Interpolate
        local_ratio = (ratio * (len(colors) - 1)) % 1.0
        r = int(curr_rgb[0] + (next_rgb[0] - curr_rgb[0]) * local_ratio)
        g = int(curr_rgb[1] + (next_rgb[1] - curr_rgb[1]) * local_ratio)
        b = int(curr_rgb[2] + (next_rgb[2] - curr_rgb[2]) * local_ratio)
        
        draw.rectangle([(0, y), (width, y + 1)], fill=(r, g, b))

    # Add text label
    try:
        # Try to use a system font, fallback to default
        font_size = max(int(width / 8), 20)
        font = ImageFont.truetype("arial.ttf", font_size)
    except (IOError, OSError):
        font = ImageFont.load_default()

    text = f"{label}\n{width}x{height}"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text in white without outline
    draw.text((x, y), text, font=font, fill=(255, 255, 255))

    # Save as WEBP with higher quality and sharpness
    output_path = os.path.join(output_dir, f"{image_name}.webp")
    img.save(output_path, "WEBP", quality=85, method=6, lossless=False)
    
    # Get file size
    file_size = os.path.getsize(output_path)
    print(f"✓ {image_name}.webp ({width}x{height}) - {file_size:,} bytes")

print(f"\n✓ All demo images generated in {output_dir}/ (all < 50KB)")
