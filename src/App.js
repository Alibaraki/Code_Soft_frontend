import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CodeSubmissionForm from './CodeSubmissionForm';
import OutputBox from './OutputBox'; // Make sure to create this new component
import './styles.css';

function App() {
  // State to keep track of test cases, initialized with one default test case
  const [testCases, setTestCases] = useState([{ id: Date.now() }]);
  // State to store the output
  const [output, setOutput] = useState('');

  // Function to handle adding a new test case
  const addTestCase = () => {
    setTestCases([...testCases, { id: Date.now() }]);
  };

  // Function to handle removing a test case
  const removeTestCase = (id) => {
    setTestCases(testCases.filter(testCase => testCase.id !== id));
  };

  // Function to handle the submission of the code and setting the output
  // Placeholder for where you would handle code execution and display the output
  const handleSubmit = (code, language) => {
    // The code and language parameters represent the submitted code and selected language.
    // Here you would typically send the code and language to your backend service 
    // for execution and then display the result in the output box.

    // Mock output to demonstrate functionality
    const mockOutput = `Result of executing the submitted code in ${language}`;
    setOutput(mockOutput);
  };

  return (
    <div>
      <CodeSubmissionForm 
        testCases={testCases} 
        removeTestCase={removeTestCase} 
        onSubmit={handleSubmit} // Pass the handleSubmit function as a prop
      />
      <div className="fab-container">
        <Fab color="primary" aria-label="add" onClick={addTestCase}>
          <AddIcon />
        </Fab>
      </div>
      <OutputBox output={output} /> {/* This will display the output */}
    </div>
  );
}

export default App;
