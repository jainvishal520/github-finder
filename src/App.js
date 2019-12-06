import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/About";
import User from "./components/users/User";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ loading: false, users: res.data });
  // }
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });
  };

  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, user: res.data })
  }

  getUserRepos = async username => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, repos: res.data })
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000)
  }
  clearUsers = () => this.setState({ loading: false, users: [] });
  render() {
    const { users, loading, user, repos, alert } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )} />
              <Route path="/about" component={About} />
              <Route path="/user/:login" render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading}
                  getUserRepos={this.getUserRepos} repos={repos} />
              )} />
            </Switch>
          </div>
          {/* {loading ? <h4>Loading..</h4> : <h1>Hello {showName && name}</h1>} */}
        </div>
      </Router>
    );
  }
}

export default App;
