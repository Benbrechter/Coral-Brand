import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('pdf', selectedFile);

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus('File uploaded successfully! URL: ' + data.fileUrl);
      } else {
        setUploadStatus('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file');
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept=".pdf"
        onChange={handleFileSelect}
      />
      <button onClick={handleUpload}>Upload PDF</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;