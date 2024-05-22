import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Typography, IconButton } from '@mui/material';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #3f51b5',
        borderRadius: '8px',
        padding: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <input {...getInputProps()} />
      <IconButton
        color="primary"
        aria-label="upload files"
        component="span"
        sx={{
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        <CloudUploadIcon fontSize="inherit" />
      </IconButton>
      <Typography variant="h6" fontSize='1rem'>
        {isDragActive ? 'Drop the files here...' : 'Drag & drop files here, or click to select files'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
      </Typography>
    </Box>
  );
};

export default FileUpload;
