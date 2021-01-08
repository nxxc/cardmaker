import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/app',
      state: {
        id: userId,
      },
    });
  };
  const onLogin = (event) => {
    const { provider } = event.target.dataset;
    authService //
      .login(provider)
      .then((data) => {
        goToMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.button}
              onClick={onLogin}
              data-provider='Google'
            >
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.button}
              onClick={onLogin}
              data-provider='Github'
            >
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
