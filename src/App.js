import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./Styles";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}

export default App;
