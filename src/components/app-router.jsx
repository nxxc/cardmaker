import React from 'react';
import Login from './login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
