import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// use this if we have issues with routing after deploy
// import { HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
// include this when signup page is up
// import SignUp from "./pages/SignUp";
// include this when favorites page is up
// import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    // <HashRouter basename="/ourprojectbasename">
    <Router>
      <div>
        <Navbar sticky="top" />
        <Wrapper>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/login" component={Login} />
		  <Route exact path="/about" component={About} />
        </Wrapper>
         <Footer />
      </div>
     
    </Router>
    
  );
}
// </HashRouter>
export default App;