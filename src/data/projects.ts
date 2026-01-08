export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  heroImage: string;
  imageCount?: number;  // Number of additional images (project_y_1.webp, project_y_2.webp, etc.)
  
  // Optional storytelling fields
  overview?: string;
  content?: string;  // Main paragraph after hero image
  closingText?: string;  // Paragraph before impact
  impact?: string[];
  year?: string;
  role?: string;
  fullWidthImages?: number[];  // Indices of images to display full-width (rest in 2-column)
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "3D-Printed Surfboard Core",
    description: `
      Engineered innovative 3D-printed core system for composite surfboards. 
      Optimized material selection and manufacturing process, reducing production costs.
    `.trim(),
    featured: true,
    heroImage: "/projects/project-1/hero_1.webp",
    imageCount: 10,
    year: "2021 - Present",
        overview: `
      The 3D‑printed surfboard started as an idea from my co‑founder, Luke, 
      and came to life when I joined the team. We asked a simple question: 
      how can modern technology make surfboards more sustainable? The answer 
      became a 3D‑printed lattice core made from recycled plastics. The 
      structure, tailored to each customer and model, is lightweight and efficient.
    `.trim(),
    content: `
      For the core design, our goal was to keep the board translucent, but this 
      posed significant durability and performance issues that I had to design around. 
      I optimized our lattice structure using a Grasshopper script, implementing 
      several changes to reduce weight while maintaining strength.
    `.trim(),
    closingText: `
      Our lattice structure has gone through countless iterations. After getting customer 
      feedback and testing the product ourselves, we altered our design to a hexagon, a much 
      stronger shape but more challenging to 3D print. This allowed us to reduce the weight 
      even more but continue to keep the translucent look.  These surfboards are for sale 
      today and can be seen in various surf shops in New England.
    `.trim(),
    impact: [
      "Reduced weight by over 60% from initial prototypes",
      "Produced a novel, beautiful product made start to finish by me",
      "Decreased custom board designing time from 8 hours to 20 minutes",
      "Stayed true to the mission using recycled feedstock and bio-based epoxy"
    ],
    fullWidthImages: [0, 4],  // First and fifth image full-width
  },
  {
    id: "project-2",
    title: "Composite Layup System",
    description: `
      Developed quality management systems for fiberglass and epoxy composite manufacturing. 
      Achieved 95% first-pass quality rate.
    `.trim(),
    featured: true,
    heroImage: "/projects/project-2/hero_2.webp",
  },
  {
    id: "project-3",
    title: "Surfboard Nightlight",
    description: `
      Created parametric design workflows using Rhino/Grasshopper for rapid prototyping. 
      Reduced design-to-prototype cycle time from weeks to days.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-3/hero_3.webp",
  },
  {
    id: "project-4",
    title: "Advanced Material Testing",
    description: `
      Comprehensive material testing and analysis for composite performance validation. 
      Developed standardized testing protocols and documentation.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-4/hero_4.webp",
  },
  {
    id: "project-5",
    title: "Production Cost Optimization",
    description: `
      Analyzed and optimized manufacturing processes across multiple product lines. 
      Achieved 25% reduction in material waste and production costs.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-5/hero_5.webp",
  },
  {
    id: "project-6",
    title: "Paddleboard Waterbottle Holder",
    description: `
      Designed and built reusable mold systems for rapid product manufacturing. 
      Reduced tooling costs and improved production consistency.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-6/hero_6.webp",
  },
];