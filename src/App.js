import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
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
import ProductsCategory from "./Components/ProductsCategory/ProductsCategory";
import DefaultFavourite from "./Components/DefaultFavourite/DefaultFavourite";
function App(props) {
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
        <Route
          path="/view mens look book"
          render={() => (
            <>
              <Header />
              <DefaultFavourite type="mens" />
              <UsefullLinks />
              <Footer />
            </>
          )}
        />
        <Route
          path="/view womens look book"
          render={() => (
            <>
              <Header />
              <DefaultFavourite type="womens" />
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
          <ProductsCategory />
          <Footer />
        </Route>
        <Route path={`/female/:name`}>
          <Header />
          <ProductsCategory />
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Hero />
          <Categories />
          <Switch>
            <Route path={`/categories/${props.categories[0]}`}>
              <ProductsHome category={props.categories[0]} />
            </Route>
            <Route path={`/categories/${props.categories[1]}`}>
              <ProductsHome category={props.categories[1]} />
            </Route>
            <Route path={`/categories/${props.categories[2]}`}>
              <ProductsHome category={props.categories[2]} />
            </Route>
            <Route path={`/categories/${props.categories[3]}`}>
              <ProductsHome category={props.categories[3]} />
            </Route>
            <ProductsHome category="electronics" />
          </Switch>

          <LookBook />
          <UsefullLinks />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.storeReducer.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
