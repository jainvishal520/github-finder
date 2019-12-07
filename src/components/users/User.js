import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
// import propTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext'
const User = ({ match }) => {
    const gitContext = useContext(githubContext);
    const { name, hireable } = gitContext.user
    useEffect(() => {
        gitContext.getUser(match.params.login)
        gitContext.getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Link to="/">Go to search</Link>
            {gitContext.loading ?
                <Spinner /> :
                <div>

                    <h1>User: {name}</h1>
                    Hireable:{hireable ? 'YES' : 'NO'}
                </div>
            }

            <Repos />

        </div>
    )
}

User.propTypes = {
    // getUser: propTypes.func.isRequired,
    // loading: propTypes.bool.isRequired,
    // user: propTypes.object.isRequired,
    // repos: propTypes.array.isRequired,
    // getUserRepos: propTypes.func.isRequired
}
export default User
