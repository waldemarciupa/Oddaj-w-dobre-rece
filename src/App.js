import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import NotFound from './components/NotFound';
import MainTemplate from './templates/MainTemplate';


const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
