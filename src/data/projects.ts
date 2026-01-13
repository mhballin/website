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
  impactTitle?: string | false;  // Custom heading for impact section, false to hide, defaults to "Impact"
  year?: string;
  role?: string;
  fullWidthImages?: number[];  // Indices of images to display full-width (rest in 2-column)
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "3D-Printed Surfboards - Revise lanugage for whole project (composites)",
    description: `
      Engineered innovative 3D-printed core system for composite surfboards. 
      Optimized material selection and manufacturing process, reducing production costs.
    `.trim(),
    featured: true,
    heroImage: "/projects/project-1/hero_1.webp",
    imageCount: 13,
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
    title: "Surfboard Nightlight",
    description: `
      Created a nightlight for my brother who needed a 
      nightlight, and loves to surf
    `.trim(),
    featured: true,
    heroImage: "/projects/project-2/hero_2.webp",
    imageCount: 11,
    year: "2025",
    overview: `
      After seeing my older brother's new apartment, I noticed he had everything 
      but a nice nightlight. I figured I should make him one. Simple elegant, 
      and only on when someone walks by 
    `.trim(),
    content: `
      After a quick brainstorm, we came up with an original idea: 
      a simple bathroom light shaped like a surfboard. Something 
      simple and clean, that would first be functional while also looking good. 
    `.trim(),
    closingText: `
      Once I printed the first prototype, I realized the light was too bright
       and would also reveal any internal cavities if present. After working 
       in Fusion 360 for the first few prototypes, I realized it would be a 
       lot easier in Rhino /Grasshopper, where I could make quicker tweaks between prototypes.  
    `.trim(),
    impactTitle: false,
    impact: [
      "Happy Brother",
    ],
    fullWidthImages: [0, 3],
  },
  {
    id: "project-3",
    title: "Paddleboard Waterbottle Holder",
    description: `
      Comprehensive material testing and analysis for composite performance validation. 
      Developed standardized testing protocols and documentation.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-3/hero_3.webp",
    imageCount: 6,
    year: "2025",
    overview: `
      A friend of mine and I got into prone paddling. He had bought a water bottle 
      holder to hydrate on longer paddles. With a longer paddling trip coming up 
      that weekend and an online order taking 1-2 weeks, a few hours on the computer 
      and a 3D-printed part would do the job and be much cheaper. 
    `.trim(),
    content: `
      After a 10-mile paddle, it worked great. Next would be a 2-bottle cage, 
      holding more water, both customizable for any size bottle.
    `.trim(),
    closingText: `
      Throughout the summer, after a few different testing sessions, 
      I'm happy with the product, although not the most eye-catching 
      or revolutionary, it solves a problem, and will keep me hydrated 
      during long days out on the water.
    `.trim(),

    impactTitle: false,
    impact: [
      "Fits any size water bottle securely",
      "Fits into existing board fin boxes for easy installation",
      "Designed for simple installation without tools or modifications"
    ],
    fullWidthImages: [1, 4],
  },
  {
    id: "project-4",
    title: "Cast Resin Vent Plug",
    description: `
      Surfboards and paddleboards need pressure equalization to prevent delamination 
      caused by temperature changes. This project focused on creating an elegant, 
      reliable vent plug using cast resin techniques for consistent quality.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-4/hero_4.webp",
    imageCount: 4,
    year: "2025",
    overview: `
      Surfboards and paddleboards require pressure equalization to prevent 
      delamination from tempersature changes. This project focused on creating 
      a reliable vent plug that could be made with simple shop materials. 
      Prior to this, we had been resin 3D-printing the vents, which worked 
      great; however, it was costly and time-consuming.

    `.trim(),
    content: `
      First a 3D
    `.trim(),
    closingText: `
      The optimized manufacturing process significantly reduced waste and improved 
      consistency. The vent plugs are now a standard component across our product line, 
      with thousands produced to date.
    `.trim(),
    impact: [
      "Reduced material waste by 25% through process optimization",
      "Achieved consistent quality across high-volume production",
      "Decreased production time per unit by 40%",
      "Created a scalable process suitable for contract manufacturing"
    ],
    fullWidthImages: [0, 2],
  },
  {
    id: "project-5",
    title: "Pickelball Paddle",
    description: `
      Designed and built reusable mold systems for rapid product manufacturing. 
      Reduced tooling costs and improved production consistency.
    `.trim(),
    featured: false,
    heroImage: "/projects/project-5/hero_5.webp",
    imageCount: 9,
    year: "2022 - 2023",
    role: "Product Designer & Engineer",
    overview: `
      Pickleball's explosive growth created demand for high-quality, affordable paddles. 
      This project applied composite manufacturing expertise to create a competitive 
      paddle with excellent performance characteristics and unique aesthetics.
    `.trim(),
    content: `
      Paddle design requires balancing weight, stiffness, and damping properties. 
      I developed custom mold systems and composite layup schedules to achieve 
      professional-grade performance while keeping manufacturing costs reasonable.
    `.trim(),
    closingText: `
      The reusable mold system proved to be a game-changer, allowing rapid iteration 
      and consistent production quality. The paddles have received positive feedback 
      from recreational and competitive players alike.
    `.trim(),
    impact: [
      "Reduced tooling costs by 60% compared to traditional manufacturing",
      "Achieved performance metrics comparable to premium brands",
      "Created a paddle design that stands out visually in a crowded market",
      "Established a scalable production system for future product variations"
    ],
    fullWidthImages: [0, 4, 7],
  },
];