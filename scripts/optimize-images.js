const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const images = ['profile.jpg', 'IMG_2884.jpg', 'IMG_2885.jpg'];
  
  console.log('🖼️  Optimizing images...');
  
  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, image.replace('.jpg', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      try {
        // Get original file size
        const originalStats = fs.statSync(inputPath);
        const originalSizeKB = Math.round(originalStats.size / 1024);
        
        // Optimize image with higher quality for profile
        if (image === 'IMG_2885.jpg') {
          await sharp(inputPath)
            .resize(400, 400, { 
              fit: 'cover', 
              position: 'center',
              withoutEnlargement: false 
            })
            .webp({ 
              quality: 90,
              effort: 6,
              smartSubsample: true
            })
            .toFile(outputPath);
        } else {
          await sharp(inputPath)
            .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(outputPath);
        }
        
        // Get optimized file size
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSizeKB = Math.round(optimizedStats.size / 1024);
        const savings = Math.round(((originalSizeKB - optimizedSizeKB) / originalSizeKB) * 100);
        
        console.log(`✅ ${image}: ${originalSizeKB}KB → ${optimizedSizeKB}KB (${savings}% smaller)`);
      } catch (error) {
        console.error(`❌ Error optimizing ${image}:`, error.message);
      }
    }
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
