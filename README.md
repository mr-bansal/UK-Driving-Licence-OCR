# OCR Extraction System
Effortless Document Data Extraction with OCR and Image Preprocessing

This project is designed to extract specific data from images of UK Driving licences. Using Optical Character Recognition (OCR) via Tesseract.js and image preprocessing techniques, this extracts structured information like name, expiration date, and document number with high accuracy. This solution is ideal for applications requiring automated data extraction from government-issued IDs or similar documents.

# Major Achievements
Enhanced OCR Accuracy: Leverages image preprocessing techniques (grayscale conversion, thresholding, resizing) to improve OCR output accuracy, especially for real-world images.

Automated Data Parsing: Parses extracted text to identify key fields (e.g., last name, first name, expiration date, document number) based on specific text patterns and locations.

Error Handling and File Cleanup: Automatically handles errors during OCR extraction and ensures uploaded and processed files are cleaned up securely.

# Technologies Used
Frontend: React.js, CSS
Backend: Node.js, Express.js, Tesseract.js
Image Processing: Sharp (for preprocessing)
                     # Project documentation
# How to Use
Upload Document Image: Users upload an image of a UK Driving Licence.
Backend Processing:
The image is preprocessed to improve text extraction quality.
Tesseract.js performs OCR on the preprocessed image.
The extracted text is parsed to locate and structure data fields.
Display Results: The frontend displays the extracted data in a structured, user-friendly format.
Supported Document Fields
The system can extract the following fields based on the document structure:

Last Name: Identified based on a numerical prefix (e.g., "1").
First Name: Identified based on a prefix (e.g., "2").
Expiration Date: Located after a specific marker (e.g., "4b").
Document Number: Located after a specific marker (e.g., "5").
