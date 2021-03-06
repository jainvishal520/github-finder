import React, { useContext } from "react";
import UserItem from "./UserItem";
// import propTypes from "prop-types";
import Spinner from "../layout/Spinner";
import githubContext from '../../context/github/githubContext';
const Users = () => {
  const gitContext = useContext(githubContext);
  const { users, loading } = gitContext
  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
          users.map(user => <UserItem user={user} key={user.id} />)
        )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
// Users.propTypes = {
//   users: propTypes.array.isRequired,
//   loading: propTypes.bool.isRequired
// };
export default Users;
