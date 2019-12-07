import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <p className="lead">You're lost, please go home</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound;