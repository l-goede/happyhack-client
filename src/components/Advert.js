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
                            <h1>{elem.jobTitle}</h1>
                            <h4>{elem.developer}</h4>
                            <h4>{elem.jobDescription}</h4>
                            <h4>{elem.deadline}</h4>
                            <h4>{elem.price}</h4>
                            <Link to={`./editJob/${elem._id}`}> Edit Job </Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default JobsList
