import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from 'src/views/Dashboard';
import store from 'src/store';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Provider>
  </Router>
);

export default App;
