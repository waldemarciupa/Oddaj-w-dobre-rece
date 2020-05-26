import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import Header from '../src/components/Header/Header';
import Homepage from './components/Home';
import NotFound from './components/NotFound';
import MainTemplate from './templates/MainTemplate';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { setCurrentUser } from './redux/users/actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <MainTemplate>
          <Header />
          <Switch>
            <Route exact path='/Oddaj-w-dobre-rece/' component={Homepage} />
            <Route exact path='/rejestracja' component={Register} />
            <Route exact path='/logowanie' component={Login} />
            <Route exact path='/wylogowano' component={Logout} />
            <Route path='*' component={NotFound} />
          </Switch>
        </MainTemplate>
      </Router>
    );
  }
}

const mapDispatchStateToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchStateToProps)(App);
