import React, { useContext } from 'react'
import RepoItem from './RepoItem'
// import propTypes from 'prop-types'
import githubContext from '../../context/github/githubContext';

const Repos = ({ repos }) => {
    const gitContext = useContext(githubContext)
    return gitContext.repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

// Repos.propTypes = {
//     repos: propTypes.array.isRequired
// }
export default Repos;