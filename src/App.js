import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from 'src/views/Dashboard';
import store from 'src/store';
import ModalHandler from 'src/components/ModalHandler';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      <ModalHandler />
    </Provider>
  </Router>
);

export default App;
