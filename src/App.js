import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Route, Switch, useParams } from "react-router";
import Register from "./Components/Register/Register";
import FetchStore from "./FetchStore";
import Login from "./Components/Login/Login";
import ProductsHome from "./Components/ProductsHome/ProductsHome";
import UsefullLinks from "./Components/UsefullLinks/UsefullLinks";
import Footer from "./Components/Footer/Footer";
import FullCart from "./Components/FullCart/FullCart";
import LookBook from "./Components/LookBook/LookBook";
import Favourite from "./Components/Favourite/Favourite";
import Categories from "./Components/Categories/Categories";
import Mens from "./Components/Mens/Mens";
import Modal from "./Components/Modal/Modal";
const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Modal />
      <FetchStore />
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route
          path="/yourCart"
          render={() => (
            <>
              <Header />
              <FullCart />
              <UsefullLinks />
              <Footer />
            </>
          )}
        />
        <Route
          path="/view your look book"
          render={() => (
            <>
              <Header />
              <Favourite />
              <UsefullLinks />
              <Footer />
            </>
          )}
        />
        <Route path="/mens">
          <Header />
          <Mens />
          <Footer />
        </Route>
        {/* </Route> */}
        <Route path={`/male/:name`}>
          <Header />
          <Item />
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Hero />
          <Categories />
          <Switch>
            <Route path="/categories/jewelery">
              <ProductsHome category="jewelery" />
            </Route>
            <Route path="/categories/electronics">
              <ProductsHome category="electronics" />
            </Route>
            <Route path="/categories/women clothing">
              <ProductsHome category="women clothing" />
            </Route>
            <ProductsHome category="men clothing" />
          </Switch>

          <LookBook />
          <UsefullLinks />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
