import React from 'react';
import PropTypes from 'prop-types';

const HintCard = ({ hint }) => {
  return (
    <div style={styles.card}>
      <p style={styles.hint}>{hint}</p>
    </div>
  );
};

HintCard.propTypes = {
  hint: PropTypes.string.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '100px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  hint: {
    fontSize: '1rem'
  },
};

export default HintCard;