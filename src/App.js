import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Appbar from "./components/Appbar";
import Stepdetail from "./components/Stepdetail";
import Projectdetail from "./components/Projectdetail";
import HeroCarousel from "./components/HeroCarousel";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Appbar />
              <HeroCarousel />
              <HomePage />
            </>
          )}
        />

        <Route
          path="/step/:id"
          render={() => (
            <>
              <Appbar />

              <Stepdetail />
            </>
          )}
          exact
        />
        <Route
          path="/project/:id"
          render={() => (
            <>
              <Appbar />

              <Projectdetail />
            </>
          )}
          exact
        />

        <Footer />

      </Router>
    </div>
  );
}

export default App;
