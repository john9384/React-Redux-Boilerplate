import React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//------------------------------------

//Helpers
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import PrivateRoute from "./helpers/PrivateRoute";

//Components
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/header/Footer";
import Dashboard from "./component/pages/dashboard/Dashboard";
//-----------------------------------------------------------

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
