import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Home () {

    return (
        <div>
            <Link to={`/add-form`}>create</Link>
            <Link to={`/jobs-offer`}>Jobs</Link>
        </div>
    )
}

export default Home
