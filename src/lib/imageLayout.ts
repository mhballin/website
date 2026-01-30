export interface ImageDimension {
  width: number;
  height: number;
}

export interface ImageInRow {
  index: number;
  aspectRatio: number;
}

export interface ImageRow {
  indices: number[];
  images: ImageInRow[];
  rowHeight: number;
}

/**
 * Calculates justified layout from provided dimensions
 * No external dependencies - pure calculation
 * Assumes a target container width of 1200px for height calculation
 */
export function createJustifiedLayout(dimensions: ImageDimension[], containerWidth: number = 1200): ImageRow[] {
  const rows: ImageRow[] = [];
  const gap = 16; // gap-4 in Tailwind = 1rem = 16px
  let i = 0;

  // Convert dimensions to aspect ratios
  const images = dimensions.map(dim => ({
    aspectRatio: dim.width / dim.height,
  }));

  while (i < images.length) {
    const row: ImageInRow[] = [];
    let totalAspectRatio = 0;
    
    const remainingImages = images.length - i;
    let imagesInThisRow = 4;
    
    // Determine images per row based on remaining count
    if (remainingImages < 3) {
      imagesInThisRow = remainingImages;
    } else if (remainingImages === 3) {
      imagesInThisRow = 3;
    } else if (remainingImages === 4) {
      imagesInThisRow = 4;
    } else if (remainingImages === 5) {
      imagesInThisRow = 5;
    } else if (remainingImages === 6) {
      imagesInThisRow = 3;
    } else if (remainingImages === 7) {
      imagesInThisRow = 4;
    } else if (remainingImages === 8) {
      imagesInThisRow = 4;
    }
    
    const rowEndIndex = Math.min(i + imagesInThisRow, images.length);
    
    // Calculate total aspect ratio for this row
    for (let j = i; j < rowEndIndex; j++) {
      totalAspectRatio += images[j].aspectRatio;
    }
    
    // Create row with flex-grow values based on aspect ratio
    for (let j = i; j < rowEndIndex; j++) {
      row.push({
        index: j,
        aspectRatio: images[j].aspectRatio,
      });
    }

    // Calculate row height based on container width and total aspect ratio
    // rowHeight = (containerWidth - gaps) / totalAspectRatio
    const totalGapWidth = gap * (imagesInThisRow - 1);
    const availableWidth = containerWidth - totalGapWidth;
    const rowHeight = Math.round(availableWidth / totalAspectRatio);

    rows.push({
      indices: row.map(r => r.index),
      images: row,
      rowHeight: Math.max(rowHeight, 250), // Min height of 250px to prevent tiny rows
    });

    i = rowEndIndex;
  }

  return rows;
}
