import React, { useState } from 'react';
import { evaluate } from 'mathjs';  
import Button from './Button';
import Display from './Display';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      setResult(evaluate(input).toString());  
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'C', '=', '/'].map((item, index) => (
          <Button
            key={index}
            value={item}
            onClick={() => {
              if (item === 'C') {
                clearInput();
              } else if (item === '=') {
                calculateResult();
              } else {
                handleClick(item);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
