import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import GlobalState from "./global/GlobalState";
import { Wrapper } from "./utils";

export default function App() {
  return (
    <GlobalState>
      <Router>
        <Header />
        <Wrapper type="big">
          <p>App</p>
        </Wrapper>
      </Router>
    </GlobalState>
  );
}
