// src/controllers/ocrController.js
const fs = require("fs").promises;
const Tesseract = require("tesseract.js");
const { parseExtractedData } = require("./dataParser");
const preprocessImage = require("./preProcess");

exports.extractDocumentData = async (req, res) => {
    try {
        // Define a temporary directory for preprocessed images
        const outputDir = `${req.file.path}-preprocessed`;
        await fs.mkdir(outputDir, { recursive: true }); // Ensure the directory exists

        // Preprocess the uploaded image with different thresholds
        const preprocessedPaths = await preprocessImage(req.file.path, outputDir);

        const allParsedData = [];  // Array to collect parsed data from each image

        // Loop through each preprocessed image path and run OCR
        for (const preprocessedPath of preprocessedPaths) {
            const text = await Tesseract.recognize(preprocessedPath, "eng", {
                logger: (m) => console.log(m),
            });

            console.log("Extracted Text:", text.data.text);  // Log the raw extracted text

            // Parse the extracted text for this image
            const parsedData = parseExtractedData(text.data.text);
            allParsedData.push({
                thresholdImagePath: preprocessedPath,
                parsedData: parsedData,
            });
        }

        // Respond with all parsed data for each thresholded image
        res.status(200).json({ results: allParsedData });
    } catch (error) {
        console.error("Error extracting document data:", error);
        res.status(500).json({ error: "Failed to extract data from document" });
    }
};
