// src/services/dataParser.js
const parseExtractedData = (text) => {
    // Regex patterns based on observed OCR text structure
    const lastNameRegex = /1\.?\s+([A-Z]+)/;              // Matches the last name after "1" or "1."
    const firstNameRegex = /2\.?\s+([A-Z]+)/;             // Matches the first name after "2" or "2."
    const expirationDateRegex = /4b\.?\s+(\d{2}\.\d{2}\.\d{4})/; // Matches expiration date after "4b" or "4b."
    const documentNumberRegex = /5\.?\s+([A-Z0-9]+)/;     // Matches document number after "5" or "5."


    // Execute regex matches
    const lastNameMatch = text.match(lastNameRegex);
    const firstNameMatch = text.match(firstNameRegex);
    const expirationDateMatch = text.match(expirationDateRegex);
    const documentNumberMatch = text.match(documentNumberRegex);

    // Log matches for debugging
    console.log("Last Name Match:", lastNameMatch ? lastNameMatch[1] : "No match");
    console.log("First Name Match:", firstNameMatch ? firstNameMatch[1] : "No match");
    console.log("Expiration Date Match:", expirationDateMatch ? expirationDateMatch[1] : "No match");
    console.log("Document Number Match:", documentNumberMatch ? documentNumberMatch[1] : "No match");

    return {
        name: `${firstNameMatch ? firstNameMatch[1].trim() : "Not Found"} ${lastNameMatch ? lastNameMatch[1].trim() : "Not Found"}`,
        expirationDate: expirationDateMatch ? expirationDateMatch[1].trim() : "Not Found",
        documentNumber: documentNumberMatch ? documentNumberMatch[1].trim() : "Not Found",
    };
};

module.exports = { parseExtractedData };
