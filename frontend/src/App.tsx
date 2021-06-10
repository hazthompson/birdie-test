import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsTimeline from "./pages/EventsTimeline";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/:careRecipientId'>
            <EventsTimeline />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
