import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import styles from './card_maker.module.css';

const CardMaker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section>hello</section>
      <Footer />
    </section>
  );
};

export default CardMaker;
