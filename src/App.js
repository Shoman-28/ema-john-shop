import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./components/Body/Shop/Shop";
import Review from "./components/Body/Review/Review";
import Inventory from "./components/Body/Inventory/Inventory";
import NotFound from "./components/Body/NotFound/NotFound";
import ProductDatels from "./components/Body/Product/ProductDatels";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          
          <Route path="/shop">
            <Body></Body>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/">
            <Body></Body>
          </Route>
          <Route path="/product/:productKey">
            <ProductDatels></ProductDatels>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
