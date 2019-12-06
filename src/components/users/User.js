import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

const User = ({ user: { name, hireable }, loading, repos, match, getUserRepos, getUser }) => {
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Link to="/">Go to search</Link>
            {loading ?
                <Spinner /> :
                <div>

                    <h1>User: {name}</h1>
                    Hireable:{hireable ? 'YES' : 'NO'}
                </div>
            }

            <Repos repos={repos} />

        </div>
    )
}

User.propTypes = {
    getUser: propTypes.func.isRequired,
    loading: propTypes.bool.isRequired,
    user: propTypes.object.isRequired,
    repos: propTypes.array.isRequired,
    getUserRepos: propTypes.func.isRequired
}
export default User
