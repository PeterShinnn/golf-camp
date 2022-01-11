import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HeaderInfo from "./components/SplashPage";
import SearchResult from "./components/SearchResult";
import OwnedSpots from "./components/OwnedSpot";
import SpotDetails from "./components/SpotDetail";

import * as sessionActions from "./store/session";
import SpotDetail from "./components/SpotDetail";

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
          <Route path="/owned">
            <OwnedSpots />
          </Route>
          <Route path="/spot/:id">
            <SpotDetails />
          </Route>
          <Route path="/search/:result">
            <SearchResult/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
