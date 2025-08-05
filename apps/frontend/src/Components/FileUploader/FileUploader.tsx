import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const FileUploader: React.FunctionComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [uploadedData, setUploadedData] = useState<Array<Record<string, string | number>>>([]);
  const [companyId, setCompanyId] = useState<string>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('No file selected');

    const formData = new FormData();
    formData.append('file', selectedFile);
    setUploadedData([]);

    alert('File uploaded successfully');
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        File Upload
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

      <Button variant="contained" onClick={handleUpload}>
        Upload File
      </Button>
    </Box>
  );
};
