import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode.react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQRValue] = useState('');
  const [qrImage, setQrImage] = useState('');
  const qrRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQRValue(inputValue);
  };

  useEffect(() => {
    if (qrValue) {
      const canvas = qrRef.current.querySelector('canvas');
      const image = canvas.toDataURL("image/png");
      setQrImage(image);
    }
  }, [qrValue]);

  return (
    <div className='App'>
      <h1> QR Code Generator </h1>
      <header className='App-header'>
        {/* <h1> QR Code Generator </h1> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder='Enter url'
          />
          <button type='submit'> Generate QR Code</button>
          {qrValue && (
          <div className="qrcode">
            <h4> Here's your QR Code:</h4>
            <div style={{ display: 'none' }} ref={qrRef}>
              <QRCode value={qrValue} />
            </div>
          {qrValue && (
            <div className='qrIMG'>
              <img src={qrImage} alt="QR Code" />
            </div>
          )}  
          </div>
        )}
        </form>
      </header>
      <div id="footer">
      made by <a href="http://pailabs.io">pai labs </a> | <a href="http://github.com/jsahagun91">Jose Sahagun</a> 
      </div>
    </div>
  );
}

export default App;
