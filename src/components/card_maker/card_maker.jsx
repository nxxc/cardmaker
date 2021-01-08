import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './card_maker.module.css';

const CardMaker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'xxxx',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'jisoo',
      company: 'kakako',
      theme: 'colorful',
      title: 'frontend',
      email: 'jisoo@gmail.com',
      message: 'Hello !',
      fileName: 'jisoo',
      fileURL: null,
    },
    {
      id: '3',
      name: 'jenny',
      company: 'blackpink',
      theme: 'dark',
      title: 'singer',
      email: 'jenny@gmail.com',
      message: 'in your area',
      fileName: 'jenny',
      fileURL: null,
    },
  ]);
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
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default CardMaker;
