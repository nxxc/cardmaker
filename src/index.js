import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth-service.js';
import ImageUploader from './service/image_uploader.js';
import ImageFileInput from './components/image_file_input/image_file_input.jsx';
import CardRepository from './service/card_repository.js';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      cardRepository={cardRepository}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
