import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Homepage from './components/Home';
import NotFound from './components/NotFound';
import MainTemplate from './templates/MainTemplate';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({ currentUser: userAuth })

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <MainTemplate>
          <Header currentUser={this.state.currentUser} />
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
}

export default App;
