import React, { useState } from 'react';

function App() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="App">
      <h1>Focus and Blur Example</h1>
      <p
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          color: isFocused ? 'blue' : 'black',
          cursor: 'pointer',
        }}
      >
        Click or tab to focus this paragraph
      </p>

      <img
        src="/pic2.jpg"
        alt="Placeholder"
        style={{
          filter: 'blur(0)',
          transition: 'filter 0.3s',
          width: '200px',         
          padding: '10px',        
          borderRadius: '8px',    
        }}
        onMouseEnter={(e) => (e.target.style.filter = 'blur(5px)')}
        onMouseLeave={(e) => (e.target.style.filter = 'blur(0)')}
      />
    </div>
  );
}

export default App;
