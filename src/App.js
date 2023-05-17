import React, { useState } from 'react';
import QRCode from 'qrcode.react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQRValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQRValue(inputValue);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> QR Code Generator </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder='Enter url'
          />
          <button type='submit'> Generate QR Code</button>
        </form>
        {qrValue && (
          <div>
            <h3> Here's your QR Code:</h3>
            <QRCode value={qrValue} />

          </div>
        )}
      </header>
      <div id="footer">
      made by <a href="http://linkedin.com/in/jsahagun01/" target="_blank">Jose Sahagun</a>
      </div>
    </div>
  );
}

export default App;
