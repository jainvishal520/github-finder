import React, { useState, useContext } from "react";
// import propTypes from "prop-types";
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const gitContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert("Please enter something", "light")
    } else {
      gitContext.searchUsers(text);
      setText('')
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          onChange={onChange}
          name='text'
          value={text}
        />
        <input
          className='btn btn-block btn-dark'
          value='Search'
          type='submit'
        />
        {gitContext.users.length > 0 && (
          <button
            className='btn btn-block btn-light'
            value='Clear All'
            onClick={gitContext.clearUsers}
          >
            Clear
            </button>
        )}
      </form>
    </div>
  );
}
Search.propTypes = {
  // clearUsers: propTypes.func.isRequired,
  // showClear: propTypes.bool.isRequired,
  // setAlert: propTypes.func.isRequired
};
export default Search;
