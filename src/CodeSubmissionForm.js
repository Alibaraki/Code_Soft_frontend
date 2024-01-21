import React from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import './styles.css';

function CodeSubmissionForm({ testCases, removeTestCase }) {
  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="language">Choose the language:</label>
        <select id="language" name="language">
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" placeholder="Enter description here..."></textarea>
      </div>
      {testCases.map((testCase, index) => (
        <div className="test-case" key={testCase.id}>
          <div className="input-group">
            <label htmlFor={`test-case-${index}`}>Test Case {index + 1}:</label>
            <input type="text" id={`test-case-${index}`} name={`test-case-${index}`} placeholder={`Input for Test Case ${index + 1}`} />
            <label htmlFor={`expected-output-${index}`}>Expected Output {index + 1}:</label>
            <input type="text" id={`expected-output-${index}`} name={`expected-output-${index}`} placeholder={`Expected Output for Test Case ${index + 1}`} />
            <IconButton aria-label="remove" onClick={() => removeTestCase(testCase.id)}>
              <RemoveIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodeSubmissionForm;
