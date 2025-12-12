# Project Overview
This is an Astro project using React components and TailwindCSS for styling.

## Tech Stack
- **Astro v4+**: Static site framework with islands architecture
- **React**: For interactive components
- **TailwindCSS v3+**: Utility-first CSS framework
- **TypeScript**: Type-safe development

## Project Structure
- `src/pages/`: File-based routing
- `src/components/`: Reusable Astro and React components
- `src/layouts/`: Page layout templates
- `public/`: Static assets

## Coding Standards

### Astro Components
- Use `.astro` extension for static components
- Use frontmatter (---) for component logic
- Keep components small and focused (single responsibility)
- Use descriptive component names in PascalCase

### React Integration
- Use React for interactive components only
- Prefix client-side components with `client:` directive
- Always specify the client loading strategy (load, idle, visible)

### TailwindCSS
- Use Tailwind utility classes exclusively (no custom CSS unless absolutely necessary)
- Follow mobile-first responsive design (sm:, md:, lg:, xl:)
- Group related utilities: layout, then spacing, then colors, then typography
- Use Tailwind's design tokens (colors, spacing scale)
- Avoid inline styles
- Limit line length to 100 characters per className

### TypeScript
- Define Props interfaces for all components
- Use type annotations for function parameters
- Avoid `any` type

### File Naming
- Components: PascalCase (Button.astro, UserCard.tsx)
- Pages: kebab-case (about.astro, contact-us.astro)
- Utilities: camelCase (formatDate.ts)

### Performance
- Use Astro's partial hydration by default
- Only add client: directives when necessary
- Optimize images using Astro's Image component
- Minimize client-side JavaScript

## Example Patterns

### Astro Component Structure
```astro
---
// Component script (runs at build time)
export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold text-gray-900">{title}</h1>
  {description && <p class="mt-2 text-gray-600">{description}</p>}
</div>
```

### React Component with Tailwind
```tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  
  return (
    
      {children}
    
  );
}
```