import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" component={SigninAndSignup}></Route>
      </Switch>
    </div>
  );
}

export default App;
