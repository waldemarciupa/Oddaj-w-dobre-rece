import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Home';
import NotFound from './components/NotFound';
import MainTemplate from './templates/MainTemplate';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/logowanie' component={Login} />
          <Route exact path='/wylogowano' component={Logout} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
