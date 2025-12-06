# Demo Images

Lightweight WEBP demo images optimized for web performance. All images are under 50KB for fast loading.

## Image Sets

### Gallery Images (320x240 - 4:3 ratio)
Perfect for demonstrating the ImageGallery component with responsive grid layouts.

| Image | Size | Usage |
|-------|------|-------|
| `gallery-1.webp` | 5.8KB | Landscape (green/blue gradient) |
| `gallery-2.webp` | 3.7KB | Urban (gray/dark gradient) |
| `gallery-3.webp` | 4.2KB | Nature (green/brown gradient) |
| `gallery-4.webp` | 4.9KB | Ocean (blue gradient) |
| `gallery-5.webp` | 5.3KB | Sunset (warm orange/red gradient) |
| `gallery-6.webp` | 4.7KB | Forest (green/brown gradient) |

### Card Images (400x200 - 2:1 ratio)
Ideal for Card component stories with header and footer content.

| Image | Size | Usage |
|-------|------|-------|
| `card-1.webp` | 7.5KB | Landscape (green/blue gradient) |
| `card-2.webp` | 4.9KB | Urban (gray/dark gradient) |
| `card-3.webp` | 5.5KB | Nature (green/brown gradient) |
| `card-4.webp` | 6.2KB | Ocean (blue gradient) |

### Detail Images (650x488 - golden ratio)
Large images for Image component and full-page demos.

| Image | Size | Usage |
|-------|------|-------|
| `detail-1.webp` | 14KB | Landscape (green/blue gradient) |
| `detail-2.webp` | 13KB | Sunset (warm orange/red gradient) |

## Generation Script

These images were generated using `generate-demo-images.py` with:
- **Format**: WEBP with quality=75 and compression method=6
- **Optimization**: Pillow image processing library
- **File Size**: All under 50KB per image
- **Gradients**: Smooth color transitions for visual appeal

To regenerate images:
```bash
python generate-demo-images.py
```

## Usage in Storybook

All component stories have been updated to use these local demo images:

- **Image.stories.tsx**: Uses `detail-1.webp` and `detail-2.webp`
- **ImageGallery.stories.tsx**: Uses `gallery-*.webp` for all gallery demos
- **Card.stories.tsx**: Uses `card-*.webp` for card examples

### Benefits

✅ **Fast Loading**: All images under 50KB  
✅ **Web Optimized**: WEBP format with efficient compression  
✅ **Consistent**: Predictable, themed color gradients  
✅ **Offline**: No external dependencies or network requests  
✅ **Accessible**: Descriptive alt text in all stories  

## Performance Metrics

- **Total Size**: ~104KB for all 12 images
- **Average Size**: ~8.7KB per image
- **Format**: WEBP (modern browser support)
- **Fallback**: JPG/PNG via Picture element in Image component
