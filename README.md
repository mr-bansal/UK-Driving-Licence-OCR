# OCR Extraction System
Effortless Document Data Extraction with OCR and Image Preprocessing

This project is designed to extract specific data from images of UK Driving licences. Using Optical Character Recognition (OCR) via Tesseract.js and image preprocessing techniques, this extracts structured information like name, expiration date, and document number with high accuracy. This solution is ideal for applications requiring automated data extraction from government-issued IDs or similar documents.

For improved usability, this application applies binary thresholding at 4 different threshold levels [80, 100, 120, 140]. OCR is performed on all 4 images, and all 4 results are shown to the user, so that the user may choose the most probable result.

Currently it only supports extracting Name, Expiration Date & Document number from the UK Driving Licence.

# Major Achievements
- Enhanced OCR Accuracy: Leverages image preprocessing techniques (grayscale conversion, thresholding, resizing) to improve OCR output accuracy, especially for real-world images.

- Automated Data Parsing: Parses extracted text to identify key fields (e.g., last name, first name, expiration date, document number) based on specific text patterns and locations.

- Error Handling and File Cleanup: Automatically handles errors during OCR extraction and ensures uploaded and processed files are cleaned up securely.

# Technologies Used
- Frontend: React.js, CSS
- Backend: Node.js, Express.js, Tesseract.js
- Image Processing: Sharp (for preprocessing)
  
