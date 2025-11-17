# NTG Design System

The official design system for Northern Territory Government digital services, providing a consistent and accessible user experience across all government applications.

## Overview

The NTG Design System is a comprehensive library of reusable UI components, design patterns, and guidelines that ensure consistency, accessibility, and quality across NT Government digital properties. Built on modern web standards, it supports both React-based applications and content management systems.

## Key Features

- **Consistent Design Language** - Unified visual style across all NT Government applications
- **Accessibility First** - WCAG compliant components ensuring inclusive digital services
- **Multiple Themes** - Support for NT Government and NTG Central branding
- **Responsive Design** - Mobile-first components that work across all devices
- **CMS Integration** - Seamless integration with Squiz DXP content management platform
- **Living Documentation** - Interactive component library with real-time examples

## Documentation

Comprehensive documentation and interactive examples are available through the [Component Library](https://ntgovernment.github.io/ntg-design-system), where you can browse and interact with all available components.

## Project Structure

```
ntg-design-system/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── button/         # Button component
│   │   ├── callout/        # Callout component with DXP integration
│   │   └── component-viewer/ # Component viewer for CMS
│   ├── themes/             # Brand theme files
│   │   ├── theme-ntg.css
│   │   └── theme-central.css
│   ├── tokens/             # Design tokens (colors, spacing, typography)
│   ├── foundations/        # Base styles and resets
│   └── runtime/            # Component initialization
├── dist/                   # Production build output
│   ├── css/               # Compiled stylesheets
│   └── types/             # TypeScript definitions
├── docs/                   # Published component documentation
└── .storybook/            # Documentation configuration
```

## Themes

The design system provides officially branded themes:

- **NT Government Theme** - Primary NT Government branding and color palette
- **NTG Central Theme** - NTG Central specific branding and styling

All themes utilize CSS custom properties, enabling consistent application of brand guidelines while maintaining flexibility.

## Technology

Built with industry-standard modern web technologies:

- React 19
- TypeScript 5.9
- CSS Custom Properties
- Squiz DXP-Next Integration
- Automated documentation with Storybook

## Getting Started

For implementation instructions and best practices, please refer to the technical documentation available through the component library.

For general inquiries about the design system, please contact the NT Government Digital Services team.

## Contributing

This is an official NT Government project. Contributions are managed through internal processes. External parties interested in contributing should contact the design system team.

## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## Support

For technical support and questions:

- Explore the [Component Library](https://ntgovernment.github.io/ntg-design-system)
- Contact NT Government Digital Services

---

**© Northern Territory Government**
