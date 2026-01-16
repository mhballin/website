export type ProjectCategory = "blueprint" | "making" | "creative";

export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  category: ProjectCategory;
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
    title: "3D-Printed Composite Surfboards",
    description: `
      Engineered innovative 3D-printed core system for composite surfboards. 
      Optimized material selection and manufacturing process, reducing production costs.
    `.trim(),
    featured: true,
    category: "blueprint",
    heroImage: "/projects/project-1/hero_1.webp",
    imageCount: 14,
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
    category: "making",
    heroImage: "/projects/project-2/hero_2.webp",
    imageCount: 11,
    year: "2025 - Present",
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
      A friend of mine and I got into prone paddling. He had bought a water bottle 
      holder to hydrate on longer paddles. With a longer paddling trip coming up 
      that weekend and an online order taking 1-2 weeks, a few hours on the computer 
      and a 3D-printed part would do the job and be much cheaper. 
    `.trim(),
    featured: false,
    category: "making",
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
    category: "making",
    heroImage: "/projects/project-4/hero_4.webp",
    imageCount: 4,
    year: "2025",
    overview: `
      Surfboards and paddleboards require pressure equalization to prevent 
      delamination from temperature changes. This project focused on creating 
      a reliable vent plug that could be made with simple shop materials. 
      Prior to this, we had been resin 3D-printing the vents, which worked 
      great; however, it was costly and time-consuming.

    `.trim(),
    content: `
      First, a 3D-printed part is printed, then silicone is poured into that mold. 
      Once cured, the 3D-printed piece is discarded. While working on a surfboard, 
      extra resin (which normally is discarded) can be poured into the silicone mold. 
      Once cured, it is popped out, cleaned up, tapped, and ready to go into the surfboard.
    `.trim(),
    closingText: `
      The optimized manufacturing process significantly reduced waste and improved visual 
      consistency (allowing for color matching). The vent plugs are now a standard component 
      across our product line.
    `.trim(),
    impact: [
      "Reduced material waste ",
      "Achieved consistent color across production",
    ],
    fullWidthImages: [0, 2],
  },
  {
    id: "project-5",
    title: "Pickleball Paddle",
    description: `
      Designed and built reusable mold systems for rapid product manufacturing. 
      Reduced tooling costs and improved production consistency.
    `.trim(),
    featured: false,
    category: "making",
    heroImage: "/projects/project-5/hero_5.webp",
    imageCount: 7,
    year: "2025 - Present",
    overview: `
      My parents have been getting into pickleball and were talking about playing 
      with their friends. I had been looking for a gift for my mother's birthday 
      and was drawing a blank. I figured I should make her a pickleball paddle. 
      With little information on the sport, paddles, or what's on the market, I started prototyping. 
    `.trim(),
    content: `
      Most handmade pickleball paddle I found online were made of wood or were 
      fully 3D printed. The wooden ones are heavy, and the 3D printed ones are 
      loud and heavy. Seeing that paddle on the market were made of sandwich 
      panels with a honeycomb lattice structure, I figured I could combine my fiberglassing 
      skills with 3D printing and make a great paddle. 
    `.trim(),
    closingText: `
      The first prototype feels great, is strong, but may have too much 
      bounce back. Currently testing the paddle to see what to change next, 
      before making another prototype. 
    `.trim(),
    impactTitle: "Next Steps",
    impact: [
      "Custom made pickleball paddle",
      "Still a work in progress",
    ],
    fullWidthImages: [0, 4, 7],
  },
  {
    id: "project-6",
    title: "Surfboard Building with EPS and Epoxy",
    description: `
      Engineered and prototyped custom surfboards using EPS foam cores 
      combined with epoxy resin and fiberglass, optimizing for performance 
      and durability across various board designs.
    `.trim(),
    featured: false,
    category: "making",
    heroImage: "/projects/project-6/hero_6.webp",
    imageCount: 5,
    year: "2024 - Present",
    overview: `
      Building surfboards from scratch requires understanding the interplay between 
      foam density, resin systems, and fiberglass layup schedules. I started exploring 
      EPS (expanded polystyrene) cores paired with epoxy resin to create lighter, 
      more durable boards than traditional polyester systems.
    `.trim(),
    content: `
      The process begins with shaping the EPS blank to create the hydrodynamic profile. 
      I then apply multiple fiberglass layers with varying fiber orientations—woven cloth 
      for torsional stiffness, uni-directional for bending resistance. The epoxy resin 
      provides superior adhesion and durability compared to polyester, while the EPS core 
      delivers excellent strength-to-weight characteristics.
    `.trim(),
    closingText: `
      Each board is a learning opportunity. Testing different foam densities, resin systems, 
      and layup patterns has revealed how small changes in materials compound into measurable 
      performance differences. The result is a collection of custom boards refined through 
      hands-on testing and iteration.
    `.trim(),
    impactTitle: "Key Learnings",
    impact: [
      "Mastered EPS blank shaping and glass-to-resin ratio optimization",
      "Improved board durability by 40% using epoxy vs. polyester systems",
      "Developed repeatable processes for consistent quality across multiple builds"
    ],
    fullWidthImages: [0, 3],
  },
  {
    id: "project-7",
    title: "Casio Watch Whoop Fitting",
    description: `
      Designed and 3D-printed a custom fitting adapter that allows a Casio watch 
      to integrate seamlessly with a Whoop band, combining durability with minimalist aesthetics.
    `.trim(),
    featured: false,
    category: "making",
    heroImage: "/projects/project-7/hero_7.webp",
    imageCount: 4,
    year: "2026",
    overview: `
      Wearable tech enthusiasts often want to combine their favorite watch with fitness tracking bands. 
      I saw an opportunity to create a clean, functional adapter that lets a Casio watch sit comfortably 
      on a Whoop strap without compromising either device's integrity.
    `.trim(),
    content: `
      The design required precise measurements of both the Casio case lugs and the Whoop band attachment points. 
      Using Fusion 360, I modeled a minimal frame that sandwiches the watch case between two retention clips, 
      allowing the assembly to slide onto the Whoop band's velcro surface. The 3D-printed material (nylon reinforced) 
      provides enough rigidity to hold the watch secure while remaining lightweight.
    `.trim(),
    closingText: `
      After several iterations to dial in the fit tolerance, the final design keeps the watch visible and accessible 
      while distributing weight evenly across the wrist. It's a small project that solves a niche problem—proof that 
      thoughtful design doesn't require complexity.
    `.trim(),
    impactTitle: false,
    impact: [
      "Seamless integration of Casio watch with Whoop band",
      "Lightweight 3D-printed solution with minimal material waste",
      "Clean aesthetics that don't compromise device visibility"
    ],
    fullWidthImages: [0, 2],
  },
  {
    id: "project-8",
    title: "Abstract Motion Graphics Series",
    description: `
      Explored generative design principles through motion graphics, 
      creating fluid, abstract animations inspired by natural phenomena.
    `.trim(),
    featured: false,
    category: "creative",
    heroImage: "/projects/project-8/hero_8.webp",
    imageCount: 3,
    year: "2025",
    overview: `
      This project started as an exploration into how code can generate beauty. 
      Using Processing and p5.js, I created a series of abstract animations that 
      respond to environmental inputs—gravity, wind, particle interactions.
    `.trim(),
    content: `
      Each piece in the series follows a simple set of rules that lead to complex, 
      unpredictable outcomes. The result is a mesmerizing blend of chaos and order, 
      where small parameter tweaks completely transform the visual output.
    `.trim(),
    closingText: `
      This series pushed my thinking on the intersection of art and engineering. 
      It proved that constraints breed creativity, and that sometimes the most 
      interesting designs emerge from mathematical systems rather than direct 
      human intention.
    `.trim(),
    impactTitle: false,
    impact: [
      "Explored generative design methodologies",
      "Created shareable animations on social media",
      "Bridged art and code in a meaningful way"
    ],
    fullWidthImages: [0],
  },
  {
    id: "project-9",
    title: "Typography & Brand Exploration",
    description: `
      Designed custom typeface pairings and visual branding systems for 
      startup concepts, focusing on cohesive design language and modular components.
    `.trim(),
    featured: false,
    category: "creative",
    heroImage: "/projects/project-9/hero_9.webp",
    imageCount: 5,
    year: "2025",
    overview: `
      Strong typography is the backbone of any brand. This project involved 
      researching font pairing theory and creating versatile design systems 
      that could scale across different mediums—web, print, and environmental design.
    `.trim(),
    content: `
      I explored how different typeface weights, sizes, and color combinations 
      could convey brand personality. Each iteration was tested across real-world 
      applications to ensure both aesthetic appeal and functional readability.
    `.trim(),
    closingText: `
      The resulting brand systems proved effective at creating instant recognition 
      while remaining flexible enough to adapt to different contexts. This project 
      reinforced that great design doesn't have to be complex—it has to be intentional.
    `.trim(),
    impactTitle: "Deliverables",
    impact: [
      "3 complete brand identity systems",
      "Design guidelines and component libraries",
      "Tested across digital and print applications"
    ],
    fullWidthImages: [0, 3],
  },
  {
    id: "project-10",
    title: "Photography & Visual Storytelling",
    description: `
      Captured and curated a portfolio of lifestyle and product photography, 
      focusing on compelling visual narratives that tell deeper stories.
    `.trim(),
    featured: false,
    category: "creative",
    heroImage: "/projects/project-10/hero_10.webp",
    imageCount: 6,
    year: "2025",
    overview: `
      Photography taught me that the best images are those that make viewers 
      feel something. Through deliberate composition, lighting, and post-processing, 
      I aimed to transform ordinary moments into powerful visual statements.
    `.trim(),
    content: `
      This collection spans lifestyle shots, product photography, and environmental 
      portraits. Each image went through careful curation and editing to ensure 
      consistency in tone, color grading, and overall aesthetic.
    `.trim(),
    closingText: `
      Photography has become my way of seeing the world differently. It's taught me 
      patience, attention to detail, and the importance of light in storytelling. 
      These skills directly translate to all my other design work.
    `.trim(),
    impactTitle: false,
    impact: [
      "Built portfolio of 100+ curated images",
      "Developed consistent visual style and color grading",
      "Used photography to enhance product documentation"
    ],
    fullWidthImages: [0, 2, 5],
  },
];