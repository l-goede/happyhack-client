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
        </div>
    )
}

export default JobsList
