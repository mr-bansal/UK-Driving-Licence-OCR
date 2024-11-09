// src/app.js
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// Import the extraction controller
const { extractDocumentData } = require("./ocrController");

// Define an upload endpoint
app.post("/api/upload", upload.single("document"), extractDocumentData);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
