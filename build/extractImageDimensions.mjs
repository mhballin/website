import path from 'path';
import sharp from 'sharp';

/**
 * Auto-detect image dimensions from project folders
 * Scans /public/projects/project-X/ for images matching pattern project_X_*.webp
 */
export async function extractImageDimensions(projectId, projectNumber, imageCount) {
  const projectDir = path.resolve(`./public/projects/${projectId}`);
  const dimensions = [];

  try {
    for (let i = 1; i <= imageCount; i++) {
      const imageNum = String(i).padStart(2, '0'); // Pad to 2 digits: 01, 02, etc.
      const imagePath = path.join(projectDir, `project_${projectNumber}_${imageNum}.webp`);

      try {
        const metadata = await sharp(imagePath).metadata();
        dimensions.push({
          width: metadata.width,
          height: metadata.height,
        });
      } catch (err) {
        console.warn(`⚠️  Could not read dimensions for ${imagePath}`);
      }
    }
  } catch (err) {
    console.warn(`⚠️  Error extracting dimensions for ${projectId}:`, err.message);
  }

  return dimensions;
}
