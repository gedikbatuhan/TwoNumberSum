import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(parseInt(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(parseInt(e.target.value));
  };

  const handleCalculate = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleCalculate}>Topla</button>
      <h6>Sonuç: {result}</h6>
    </div>
  );
}

export default App;
