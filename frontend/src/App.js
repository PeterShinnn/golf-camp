import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Signup/SignupFormPage";
import Navigation from "./components/Navigation";
import HeaderInfo from "./components/Main/SplashPage";
import SearchResult from "./components/Search/SearchResult";
import OwnedSpots from "./components/Spots/OwnedSpot";
import SpotDetail from "./components/Spots/SpotDetail";

import * as sessionActions from "./store/session";

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
          <Route exact path="/owned">
            <OwnedSpots />
          </Route>
          <Route path="/owned/spot/:id">
            <SpotDetail />
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
