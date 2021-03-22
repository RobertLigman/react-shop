import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Route, Switch } from "react-router";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route>
          <Header />
          <Hero />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
