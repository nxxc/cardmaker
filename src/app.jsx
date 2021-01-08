import React from 'react';
import Login from './components/login/login.jsx';
import styles from './app.module.css';

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
};

export default App;
