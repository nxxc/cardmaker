import React from 'react';
import Button from '../button/button.jsx';
import ImageFileInput from '../image_file_input/image_file_input.jsx';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
      />
      <input className={styles.input} type='text' name='name' value={name} />
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input className={styles.input} type='text' name='title' value={title} />
      <input className={styles.input} type='text' name='email' value={email} />
      <textarea className={styles.textarea} name='message' value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
