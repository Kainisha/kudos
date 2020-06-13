import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from 'src/views/Dashboard';
import store from 'src/store';
import Modals from 'src/components/Modals/Modals';
import ModalsContext from 'src/context/modalsContext';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Provider store={store}>
        <ModalsContext.Provider value={{ showModal, setShowModal }}>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
          <Modals />
        </ModalsContext.Provider>
      </Provider>
    </Router>
  );
};

export default App;
