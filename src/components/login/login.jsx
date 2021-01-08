import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => {
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
