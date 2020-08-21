import React from "react";
import { Component } from "react";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//------------------------------------

//Helpers
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./helpers/setAuthToken"
import { setCurrentUser } from "./redux/actions/authActions";
import { logoutUser } from "./redux/actions/authActions";
//--------------------------------------------

//import PrivateRoute from "./helpers/PrivateRoute";
//import PrivateRoute from "./helpers/PrivateRoute"
//Components
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import LandingPage from "./components/pages/LandingPage/LandingPage"

//-----------------------------------------------------------
try {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./login";
    }
  }
} catch (err) {
  console.log(err);
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="container">
          <Route exact path="/" component={LandingPage} />
          <Switch>
          </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
