// src/middlewares/fileValidation.js
const validateFile = (file) => {
    if (!file) return "No file uploaded";
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) return "Invalid file type";
    return null;
};

module.exports = { validateFile };
