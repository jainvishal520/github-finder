import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound'
const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
            {/* {loading ? <h4>Loading..</h4> : <h1>Hello {showName && name}</h1>} */}
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
