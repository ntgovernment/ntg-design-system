import type { Meta, StoryObj } from "@storybook/react";
import { ImageGallery } from "./ImageGallery";
import type { GalleryImage } from "./ImageGallery";

const basicImages: GalleryImage[] = [
  {
    src: "/demo-images/gallery-1.webp",
    alt: "Scenic landscape with gradient sky and green fields",
    title: "Mountain Serenity",
    description: "Peaceful landscape with vibrant color gradient",
    width: 320,
    height: 240,
  },
  {
    src: "/demo-images/gallery-2.webp",
    alt: "Urban scene with gray tones and industrial elements",
    title: "Urban Exploration",
    description: "Modern urban landscape in cool tones",
    width: 320,
    height: 240,
  },
  {
    src: "/demo-images/gallery-3.webp",
    alt: "Natural scenery with green and earth tones",
    title: "Nature's Colors",
    description: "Beautiful nature scene with earthy palette",
    width: 320,
    height: 240,
  },
  {
    src: "/demo-images/gallery-4.webp",
    alt: "Ocean-inspired gradient with blue tones",
    title: "Ocean Waves",
    description: "Serene ocean landscape in deep blues",
    width: 320,
    height: 240,
  },
  {
    src: "/demo-images/gallery-5.webp",
    alt: "Sunset gradient with warm orange and red tones",
    title: "Desert Dunes",
    description: "Warm sunset palette in orange and gold",
    width: 320,
    height: 240,
  },
  {
    src: "/demo-images/gallery-6.webp",
    alt: "Forest-inspired gradient with green and brown tones",
    title: "Forest Light",
    description: "Natural forest colors in green and brown",
    width: 320,
    height: 240,
  },
];

const manyImages: GalleryImage[] = Array.from({ length: 12 }, (_, i) => {
  const imageIndex = (i % 6) + 1;
  const images = [
    { src: "/demo-images/gallery-1.webp", alt: "Landscape" },
    { src: "/demo-images/gallery-2.webp", alt: "Urban scene" },
    { src: "/demo-images/gallery-3.webp", alt: "Nature" },
    { src: "/demo-images/gallery-4.webp", alt: "Ocean" },
    { src: "/demo-images/gallery-5.webp", alt: "Sunset" },
    { src: "/demo-images/gallery-6.webp", alt: "Forest" },
  ];
  const img = images[imageIndex - 1];
  return {
    src: img.src,
    alt: `${img.alt} - Gallery demonstration image ${i + 1}`,
    title: `Image ${i + 1}`,
    description: `Demonstration image number ${i + 1} showing responsive gallery and lazy-loading`,
    width: 320,
    height: 240,
  };
});

const meta = {
  title: "Components/ImageGallery",
  component: ImageGallery,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A responsive image gallery component with interactive lightbox viewer, zoom, keyboard navigation, touch gestures, and lazy-loading support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: "object",
      description: "Array of image objects with src, alt, and optional metadata",
    },
    imagesPerRow: {
      control: { type: "number", min: 1, max: 6, step: 1 },
      description: "Number of images per row (responsive, default: 4). Images maintain 320px minimum width except on small screens.",
    },
    gap: {
      control: { type: "number", min: 0, max: 32, step: 4 },
      description: "Gap between grid items in pixels",
    },
    imageWidth: {
      control: { type: "number", min: 100, max: 500, step: 10 },
      description: "Default width for gallery images in pixels (default: 320)",
    },
    imageHeight: {
      control: { type: "number", min: 75, max: 400, step: 10 },
      description: "Default height for gallery images in pixels (default: 240)",
    },
  },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16,
    imageWidth: 320,
    imageHeight: 240,
  },
};

export const ManyImages: Story = {
  args: {
    images: manyImages,
    imagesPerRow: 4,
    gap: 12,
  },
  parameters: {
    docs: {
      description: {
        story: "Gallery with 12 images demonstrating lazy-loading and responsive column reduction on smaller screens.",
      },
    },
  },
};

export const TwoColumns: Story = {
  args: {
    images: basicImages,
    imagesPerRow: 2,
    gap: 16,
  },
};

export const FourColumns: Story = {
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 12,
  },
};

export const WithTitlesAndDescriptions: Story = {
  args: {
    images: basicImages.map((img) => ({
      ...img,
      title: `Title: ${img.alt}`,
      description: `Detailed description for ${img.alt}`,
    })),
    imagesPerRow: 4,
    gap: 16,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Gallery images with titles and descriptions that appear in the lightbox viewer. Use aria-describedby for accessibility.",
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Gallery grid automatically adapts columns based on container width, maintaining 320px minimum image width. Resize browser to see responsive behavior.",
      },
    },
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const GestureDemo: Story = {
  args: {
    images: manyImages.slice(0, 6),
    imagesPerRow: 4,
    gap: 16,
  },
  parameters: {
    docs: {
      description: {
        story: `
## Interaction Guide

**Desktop:**
- Click image to open lightbox
- Arrow keys (Left/Right) navigate images
- Escape closes lightbox
- Zoom buttons cycle: 1x → 1.5x → 2x → 3x → 1x
- Click and drag to pan zoomed images
- Fullscreen button expands to viewport

**Touch (Mobile/Tablet):**
- Tap image to open lightbox
- Swipe left/right (30px+) to navigate
- Two-finger pinch-zoom or spread to zoom in/out
- Drag to pan zoomed images
- Tap thumbnail to jump to image

**Accessibility:**
- All images require descriptive alt text
- Keyboard fully supported
- ARIA labels on all controls
- Focus indicators visible on all interactive elements
        `,
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16,
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <p style={{ color: "#666", marginBottom: "16px", fontSize: "14px" }}>
        <strong>Try these interactions:</strong>
      </p>
      <ul style={{ color: "#666", fontSize: "14px", marginBottom: "16px" }}>
        <li>Click any image to open the lightbox</li>
        <li>Use arrow keys to navigate (keyboard)</li>
        <li>Press Escape to close</li>
        <li>Click zoom buttons to cycle zoom levels (1x → 1.5x → 2x → 3x)</li>
        <li>Drag zoomed images to pan</li>
        <li>Click thumbnails to jump to images</li>
        <li>Fullscreen button for immersive viewing</li>
      </ul>
      <ImageGallery {...args} />
    </div>
  ),
};
