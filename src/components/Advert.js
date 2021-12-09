import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function AdvertList(props) {
    
    const {adverts} = props

    if(!adverts) {
        return <Spinner animation="grow" variant="dark" />
    }
console.log(test)
    return (
        <div>
            <h1>test</h1>
            {
                adverts.map((elem) => {
                    return (
                        <div>
                            <Link to={`/adverts/${elem._id}`} >  {elem.name}  </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdvertList
