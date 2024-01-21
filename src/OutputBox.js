import React from 'react';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy'; // Import the copy icon
import './styles.css';

const OutputBox = ({ output }) => {
  if (!output) return null; // Don't render the box if there is no output

  // Function to copy the output to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(() => {
      // Show some feedback that the text was copied.
      alert('Output copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="output-box">
      <h3>Output:</h3>
      <pre>{output}</pre>
      <IconButton onClick={copyToClipboard} aria-label="copy">
        <FileCopyIcon />
      </IconButton>
    </div>
  );
};

export default OutputBox;
