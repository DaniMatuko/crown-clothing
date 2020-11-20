import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = auth.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/signin" component={SigninAndSignup}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
