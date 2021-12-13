import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function JobsList(props) {

    const {jobs} = props

    if(!jobs) {
        return <Spinner animation="grow" variant="dark" />
        
    }

    const {btnDelete} = props
   
    return (
        <div>
            <Link to={`/add-form`}>create</Link>
            {
                jobs.map((elem) => {
                    return (
                        <div>
                        <h2>jobs Detail Component</h2>
                        <h4>Name: {elem.name}</h4>
                        <h4>details: {elem.details}</h4>
                        <h4>Skills needed: €{elem.skills}</h4>
                        <h4>Deadline: {elem.date}</h4>
                        <h4>Offer: €{elem.price}</h4>
                        <h4>Contact: €{elem.contact}</h4>
                            <Link to={`/job-detail/${elem._id}`} > details </Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default JobsList
