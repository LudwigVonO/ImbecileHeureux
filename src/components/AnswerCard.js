import React from 'react';
import PropTypes from 'prop-types';

const AnswerCard = ({ title, style = 's'}) => {

  let finalHeight = style =='s' ? '50px' :'100px'; 
  const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '100px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    height: finalHeight,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center'
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  content: {
    fontSize: '1rem',
    color: '#555',
  },
  };
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
};
export default AnswerCard;