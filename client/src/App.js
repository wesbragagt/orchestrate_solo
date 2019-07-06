import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import useLoggedIn from "./Utils/useLoggedIn";

import SideNavigation from "./Components/Navigation/SideNavigation";
import TopNavigation from "./Components/Navigation/TopNavigation";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Bands from "./Pages/Bands";
import Band from "./Pages/Band";
import Todos from "./Pages/Todos";
import Profile from "./Pages/Profile";
import Venues from "./Pages/Venues";
import Contacts from "./Pages/Contacts";
import useWindow from "./Utils/useWindow";
import "./Styles/index.scss";

const AppContext = React.createContext();

function App() {
  const [NavToggled, setNavToggled] = useState(false);
  const loggedIn = useLoggedIn();
  const smallScreen = useWindow();

  const contentContainerClass = () => {
    if (smallScreen) {
      if (NavToggled) return "contentContainer smallScreen navShown";
      return "contentContainer smallScreen";
    }
    return "contentContainer";
  };

  return (
    <AppContext.Provider value={{loggedIn: loggedIn.loggedIn, userId: loggedIn.userId}}>
      <div className="appContainer">
        <Router>
          {loggedIn.loggedIn && (
            <SideNavigation
              loggedIn={loggedIn.loggedIn}
              smallScreen={smallScreen}
              setNavToggled={setNavToggled}
            />
          )}
          <div className={contentContainerClass()}>
            {loggedIn.loggedIn && (
              <TopNavigation
                loggedIn={loggedIn.loggedIn}
                smallScreen={smallScreen}
                navToggled={NavToggled}
                setNavToggled={setNavToggled}
              />
            )}
            {loggedIn.loggedIn ? (
              <Switch>
                <Route path="/artists" component={Bands} />
                <Route path="/artist" component={Band} />
                <Route path="/events/:eventId?" component={Events} />
                <Route path="/profile" component={Profile} />
                <Route path="/todos" component={Todos} />
                <Route path="/venues" component={Venues} />
                <Route path="/contacts" component={Contacts} />
                <Route component={Home} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/signup" exact component={SignUp} />
                <Route path="/log-in" exact component={Login} />
                <Route component={Login} />
              </Switch>
            )}
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export {App, AppContext};
