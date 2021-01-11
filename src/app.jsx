import React from 'react';
import Login from './components/login/login.jsx';
import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardMaker from './components/card_maker/card_maker.jsx';

const App = ({ authService, FileInput, cardRepository }) => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login authService={authService} />
          </Route>
          <Route path='/app'>
            <CardMaker
              authService={authService}
              cardRepository={cardRepository}
              FileInput={FileInput}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
