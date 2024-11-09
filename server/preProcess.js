// src/utils/preprocessImage.js
const sharp = require("sharp");

/**
 * Preprocess an image at multiple threshold levels to improve OCR accuracy.
 * @param {string} inputPath - Path to the input image.
 * @param {string} outputDir - Directory to save the preprocessed images.
 * @returns {Promise<string[]>} - Resolves to an array of output paths for the processed images.
 */
const preprocessImage = async (inputPath, outputDir) => {
    const thresholds = [80, 100, 120, 140];  // Define threshold levels
    const outputPaths = [];

    try {
        for (const threshold of thresholds) {
            const outputPath = `${outputDir}/preprocessed-threshold-${threshold}.png`;
            await sharp(inputPath)
                .resize(1000)          // Resize for better OCR accuracy
                .grayscale()           // Convert to grayscale
                .threshold(threshold)   // Apply binary thresholding with the current threshold
                .toFile(outputPath);

            outputPaths.push(outputPath);  // Collect the output path for each thresholded image
        }

        return outputPaths;
    } catch (error) {
        console.error("Error in preprocessing image:", error);
        throw error;
    }
};

module.exports = preprocessImage;
