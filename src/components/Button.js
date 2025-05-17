import React from 'react';

const Button = ({ onClick, styleType = 'primary', label }) => {
  const styles = {
    primary: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <button style={styles[styleType]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;