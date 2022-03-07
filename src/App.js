import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shopComponent';
import Header from './components/header/headerComponent';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-upComponent';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null

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
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="signin" element={this.props.currentUser ? (<Navigate to='/' />) : (<SignInAndSignUpPage />)} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
