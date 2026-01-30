import { extractImageDimensions } from '../../build/extractImageDimensions.mjs';

/**
 * Enrich projects by auto-detecting image dimensions for autoLayout projects
 */
export async function enrichProjectsWithImageDimensions(projects) {
  const enriched = await Promise.all(
    projects.map(async (project) => {
      if (project.autoLayout && project.imageCount && !project.imageDimensions) {
        const projectNumber = project.id.split('-')[1];
        const dimensions = await extractImageDimensions(
          project.id,
          projectNumber,
          project.imageCount
        );

        if (dimensions.length > 0) {
          console.log(`✅ Auto-detected dimensions for "${project.title}": ${dimensions.length} images`);
          return {
            ...project,
            imageDimensions: dimensions,
          };
        }
      }
      return project;
    })
  );

  return enriched;
}
