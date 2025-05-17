const Button = ({ onClick, styleType = 'primary', label, isDisabled }) => {
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
    disabled: {
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      opacity : 0.15
    },
  };

  return (
    <button style={isDisabled ? styles["disabled"] : styles[styleType]} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;