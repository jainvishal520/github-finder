import React, { useState } from "react";
import propTypes from "prop-types";
const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert("Please enter something", "light")
    } else {
      searchUsers(text);
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
Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired
};
export default Search;
