export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  heroImage: string;
  images: string[];
  tags: string[];
  
  // Optional storytelling fields
  overview?: string;
  content?: string;  // Main paragraph after hero image
  closingText?: string;  // Paragraph before results
  results?: string[];
  year?: string;
  role?: string;
  imageCaptions?: { [key: string]: string };
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "3D-Printed Surfboard Core",
    description: "Engineered innovative 3D-printed core system for composite surfboards. Optimized material selection and manufacturing process, reducing production costs.",
    featured: true,
    heroImage: "/projects/project-1/hero.webp",
    images: [
      "/projects/project-1/hero.webp",
      "/projects/project-1/detail-1.webp",
      "/projects/project-1/detail-2.webp",
    ],
    tags: ["3D Printing", "Composites", "Product Design"],
    year: "2021 - Present",
    overview: "Traditional surfboard cores are labor-intensive and expensive to manufacture. I developed a 3D-printed core system that revolutionizes the production process while maintaining the performance characteristics surfers demand.",
    content: "Surfboard manufacturing traditionally relies on costly, time-consuming hand-shaping or CNC machining. I designed a parametric lattice structure optimized for additive manufacturing, carefully selecting materials that balance strength-to-weight ratio with printability. The result is a modular design system that allows customization while maintaining manufacturing efficiency and performance.",
    closingText: "This project demonstrates how modern manufacturing techniques can transform traditional industries. By combining engineering principles with practical production constraints, we've created a solution that benefits both manufacturers and end users.",
    results: [
      "Reduced production costs by 40% compared to traditional methods",
      "Decreased manufacturing time from 8 hours to 2 hours per core",
      "Achieved weight parity with hand-shaped EPS cores",
      "Enabled rapid prototyping and custom designs"
    ],
  },
  {
    id: "project-2",
    title: "Composite Layup System",
    description: "Developed quality management systems for fiberglass and epoxy composite manufacturing. Achieved 95% first-pass quality rate.",
    featured: true,
    heroImage: "/projects/project-2/hero.webp",
    images: [
      "/projects/project-2/hero.webp",
      "/projects/project-2/detail-1.webp",
      "/projects/project-2/detail-2.webp",
    ],
    tags: ["Manufacturing", "Quality Control", "Optimization"],
  },
  {
    id: "project-3",
    title: "Parametric Design Workflow",
    description: "Created parametric design workflows using Rhino/Grasshopper for rapid prototyping. Reduced design-to-prototype cycle time from weeks to days.",
    featured: false,
    heroImage: "/projects/project-3/hero.webp",
    images: [
      "/projects/project-3/hero.webp",
      "/projects/project-3/detail-1.webp",
      "/projects/project-3/detail-2.webp",
    ],
    tags: ["CAD Design", "Automation", "Process Improvement"],
  },
  {
    id: "project-4",
    title: "Advanced Material Testing",
    description: "Comprehensive material testing and analysis for composite performance validation. Developed standardized testing protocols and documentation.",
    featured: false,
    heroImage: "/projects/project-4/hero.webp",
    images: [
      "/projects/project-4/hero.webp",
      "/projects/project-4/detail-1.webp",
      "/projects/project-4/detail-2.webp",
    ],
    tags: ["Materials Science", "Testing", "Documentation"],
  },
  {
    id: "project-5",
    title: "Production Cost Optimization",
    description: "Analyzed and optimized manufacturing processes across multiple product lines. Achieved 25% reduction in material waste and production costs.",
    featured: false,
    heroImage: "/projects/project-5/hero.webp",
    images: [
      "/projects/project-5/hero.webp",
      "/projects/project-5/detail-1.webp",
      "/projects/project-5/detail-2.webp",
    ],
    tags: ["Cost Analysis", "Manufacturing", "Efficiency"],
  },
  {
    id: "project-6",
    title: "Custom Mold Design System",
    description: "Designed and built reusable mold systems for rapid product manufacturing. Reduced tooling costs and improved production consistency.",
    featured: false,
    heroImage: "/projects/project-6/hero.webp",
    images: [
      "/projects/project-6/hero.webp",
      "/projects/project-6/detail-1.webp",
      "/projects/project-6/detail-2.webp",
    ],
    tags: ["Tooling", "Design Engineering", "Manufacturing"],
  },
];
