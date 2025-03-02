
import React, { useState } from 'react';
import '../Styles/PptxToPdf.css';

const PptxToPdf = () => {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrorMessage('');
    } else {
      setErrorMessage('Please select a valid file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please select a file before converting.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('outputFormat', 'pdf'); //This is hardcoded for this conversion component..

    try {
      const res = await fetch('http://localhost:3000/convert', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.message || 'Conversion failed');
      }

      const result = await res.json();
      if (result.downloadUrl) {
        setDownloadUrl(result.downloadUrl);
        setErrorMessage('');
      } else {
        throw new Error('Download URL not found in response');
      }
    } catch (e) {
      console.error('Error:', e);
      setErrorMessage(e.message || 'An error occurred during conversion.');
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSuccessMessage('File downloaded successfully!');
    } else {
      setErrorMessage('No file available for download.');
    }
  };

  return (
    <div className="pptx-to-pdf container mt-5">
      <h2 className="text-center mb-4">PPTX to PDF</h2>
      <div className="card shadow mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fileInput" className="form-label">Select PPTX File</label>
              <input type="file" className="form-control" id="fileInput" accept=".pptx" onChange={handleFileChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Convert to PDF</button>
          </form>
          {downloadUrl && (
            <div className="mt-3 text-center">
              <button onClick={handleDownload} className="btn btn-success">Download PDF</button>
            </div>
          )}
          {successMessage && <p className="success-message text-success text-center mt-3">{successMessage}</p>}
          {errorMessage && <p className="error-message text-danger text-center mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default PptxToPdf;