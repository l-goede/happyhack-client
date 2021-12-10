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
                            <h1>{elem.name}</h1>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default JobsList
