import React, { Component } from "react";
import propTypes from "prop-types";
class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert("Please enter something", "light")
    } else {
      this.props.searchUsers(this.state.text);
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            onChange={this.onChange}
            name='text'
            value={this.state.text}
          />
          <input
            className='btn btn-block btn-dark'
            value='Search'
            type='submit'
          />
          {showClear && (
            <button
              className='btn btn-block btn-light'
              value='Clear All'
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
