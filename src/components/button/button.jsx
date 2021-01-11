import React from 'react';
import styles from './button.module.css';

const Button = React.memo(({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
});

export default Button;
