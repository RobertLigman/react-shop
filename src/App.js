import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Route, Switch } from "react-router";
import Register from "./Components/Register/Register";
import FetchStore from "./FetchStore";
import Login from "./Components/Login/Login";
import ProductsHome from "./Components/ProductsHome/ProductsHome";
import UsefullLinks from "./Components/UsefullLinks/UsefullLinks";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <FetchStore />
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route>
          <Header />
          <Hero />
          <ProductsHome />
          <UsefullLinks />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
