import React, { Component } from 'react'
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
class User extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
    render() {
        const { user: { name, hireable }, loading, repos } = this.props
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
}

User.propTypes = {
    getUser: propTypes.func.isRequired,
    loading: propTypes.bool.isRequired,
    user: propTypes.object.isRequired,
    repos: propTypes.array.isRequired,
    getUserRepos: propTypes.func.isRequired
}
export default User
