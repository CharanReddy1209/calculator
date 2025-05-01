import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
      setExpression(number);
    } else {
      setDisplay(display + number);
      setExpression(expression + number);
    }
  };

  const handleOperator = (operator) => {
    setDisplay('0');
    setExpression(expression + operator);
  };

  const handleEqual = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/calculate', {
        expression: expression
      });
      setDisplay(response.data.result.toString());
      setExpression(response.data.result.toString());
      setError('');
    } catch (error) {
      setError('Invalid expression');
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setError('');
  };

  return (
    <div className="calculator">
      <div className="display">
        {error ? <span className="error">{error}</span> : display}
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleOperator('*')}>×</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button onClick={() => handleOperator('+')} className="plus">+</button>
        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button onClick={handleEqual} className="equal">=</button>
        <button onClick={() => handleNumber('0')} className="zero">0</button>
        <button onClick={() => handleNumber('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator; 