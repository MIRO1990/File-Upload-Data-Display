import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NetworkService } from '../../services';

export const FileUploader: React.FunctionComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [companyId, setCompanyId] = useState<string>();
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('No file selected');
      return;
    }

    if (!companyId?.trim()) {
      alert('Please enter a Company ID');
      return;
    }

    setUploadMessage(null);
    setUploadSuccess(null);

    const message = await NetworkService.uploadAssets(companyId, selectedFile);

    if (message) {
      setUploadMessage(message);
      setUploadSuccess(true);
    } else {
      setUploadMessage('Upload failed. Please try again.');
      setUploadSuccess(false);
    }
  };

  const uploadDisabled = !companyId || !selectedFile;

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        File Upload only CSV
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <TextField
          label="Company ID"
          variant="outlined"
          value={companyId}
          onChange={e => setCompanyId(e.target.value)}
          placeholder="Enter a company ID"
        />

        <Button variant="outlined" component="label">
          Select File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" onClick={handleUpload} disabled={uploadDisabled}>
          Upload File
        </Button>
      </Stack>

      {uploadMessage && (
        <Alert severity={uploadSuccess ? 'success' : 'error'} sx={{ mt: 3 }}>
          {uploadMessage}
        </Alert>
      )}
    </Box>
  );
};
