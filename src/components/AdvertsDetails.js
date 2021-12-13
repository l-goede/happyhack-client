import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

function JobsDetails(props) {
    // We get this 'jobsId' from the <Route path="/jobs/:jobsId "> we defined in App.js
    const {jobsId} = useParams()
    const [jobsDetail, setJobsDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single jobs  
           let response = await axios.get(`${API_URL}/jobs/${jobsId}`,{withCredentials: true})
           setJobsDetail(response.data)
        }
        getData()
    }, [])

    if(!jobsDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnDelete} = props

    return (
        <div>
            <h2>jobs Detail Component</h2>
            <h4>Name: {jobsDetail.name}</h4>
            <h4>details: {jobsDetail.details}</h4>
            <h4>Skills needed: €{jobsDetail.skills}</h4>
            <h4>Deadline: {jobsDetail.date}</h4>
            <h4>Offer: €{jobsDetail.price}</h4>
            <h4>Contact: €{jobsDetail.contact}</h4>
            <img src={jobsDetail.image} />
            <button>
                <Link to={`/jobs/${jobsDetail._id}/edit`} >Edit</Link>
            </button>
            <button onClick={() => { btnDelete(jobsDetail._id)  }  } >Delete</button>
        </div>
    )
}

export default JobsDetails