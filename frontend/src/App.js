import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Signup/SignupFormPage";
import Navigation from "./components/Navigation";
import HeaderInfo from "./components/Main/SplashPage";
import SearchResult from "./components/Search/SearchResult";
import OwnedSpots from "./components/Spots/OwnedSpot";
import SpotDetail from "./components/Spots/SpotDetail";
import Reservation from "./components/Reservation";

import * as sessionActions from "./store/session";
import Footer from "./components/Main/footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HeaderInfo/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/search/:result">
            <SearchResult/>
          </Route>
          <Route exact path="/owned">
            <OwnedSpots />
          </Route>
          <Route exact path="/spot/:id">
            <SpotDetail />
          </Route>
          <Route path="/owned/spot/:id">
            <SpotDetail />
          </Route>
          <Route path="/trips">
            <Reservation/>
          </Route>
          <Route>
            <h2>Page does not exist</h2>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
