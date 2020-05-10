import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Home';
import NotFound from './components/NotFound';
import MainTemplate from './templates/MainTemplate';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/logowanie' component={Login} />
          <Route exact path='/rejestracja' component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
