import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop"

const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/hats" component={HatsPage}></Route>
      <Route path="/shop" component={Shop}></Route>
    </Switch>
  );
}

export default App;
