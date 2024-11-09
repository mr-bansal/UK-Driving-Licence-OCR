import React, { useState } from "react";
import axios from "axios";
import './UploadForm.css';  // Import the updated CSS file

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);  // Add loading state

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("document", file);

        // Set loading to true when the request starts
        setLoading(true);
        setError("");  // Reset error message

        try {
            const response = await axios.post("http://localhost:5000/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setData(response.data.results);  // Assuming response.data.results is an array of parsed results
        } catch (err) {
            console.error(err);
            setError("Failed to extract data from document.");
        } finally {
            // Set loading to false after request completes (success or failure)
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <main className="App-main">
                <div className="App-header">
                    <h1>Upload Document</h1>
                    <form onSubmit={handleSubmit} className="upload-form">
                        <input type="file" accept="image/*" onChange={handleFileChange} className="search-input" />
                        <button type="submit" className="search-button">Upload and Extract</button>
                    </form>

                    {error && <p className="error-message">{error}</p>}

                    {loading && <div className="loading-spinner"></div>}

                    {data && (
                        <div className="results-container">
                            <h2>Extracted Information</h2>
                            {data.map((result, index) => (
                                <div key={index} className="result-item">
                                    <h3 className="result-title">Result {index + 1}</h3>
                                    <p><strong>Name:</strong> {result.parsedData.name || "N/A"}</p>
                                    <p><strong>Document Number:</strong> {result.parsedData.documentNumber || "N/A"}</p>
                                    <p><strong>Expiration Date:</strong> {result.parsedData.expirationDate || "N/A"}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <footer className="site-footer">
                <p>Made with ❤️ by: <a href="https://www.linkedin.com/in/keshav-bansal-iit/" target="_blank" rel="noopener noreferrer">Keshav Bansal</a></p>
            </footer>
        </div>
    );
};

export default UploadForm;
