import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header, Home, Finder, Session, PageNotFound } from "./components";
import GlobalState from "./global/GlobalState";
import { Wrapper } from "./utils";

export default function App() {
  return (
    <GlobalState>
      <Router>
        <Header />
        <Wrapper type="big">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/new" element={<Session />} />
            <Route exact path="/finder" element={<Finder />} />
            {/* <Route path="/login" exact element={<LoginPage />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Wrapper>
      </Router>
    </GlobalState>
  );
}
