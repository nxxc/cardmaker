import React from 'react';

import Login from './components/login/login.jsx';

const App = ({ authService }) => {
  return <Login authService={authService} />;
};

export default App;
