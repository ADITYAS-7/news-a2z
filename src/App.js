import "./App.css";

import React, { Component } from "react";
import News from "./components/News";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <DrawerAppBar />
        <News />
        <Footer />
      </div>
    );
  }
}
