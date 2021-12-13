import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function JobsList(props) {

    const {jobs} = props

    if(!jobs) {
        return <Spinner animation="grow" variant="dark" />
    }
    return (
        <div>
            <Link to={`/add-form`}>create</Link>
            {
                jobs.map((elem) => {
                    return (
                        <div>
                            <h2>jobs Detail Component</h2>
                            {/* <img src={{userImage}} alt="userImage"/> */}
                            <h4>Username: {elem.username}</h4>
                            <h4>JobTitle: {elem.jobTitle}</h4>
                            <h4>Job Description: {elem.jobDescription}</h4>
                            <h4>Deadline: {elem.deadline}</h4>
                            <h4>Price: {elem.price}</h4>
                            <Link to={`/jobs/${elem._id}/edit`} > Edit </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JobsList
