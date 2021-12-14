import {API_URL} from '../config'
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import ModalUnstyled from '@mui/base/ModalUnstyled';
import axios from 'axios'

function EditForm(props) {
    const {todoId} = useParams()

    const [todoDetail, setTodoDetail] = useState(null)

    const {jobsId} = useParams()
    const [jobsDetail, setJobDetail] = useState(null)
    const {jobs} = props
    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           // Fetching info for a single job  
           let response = await axios.get(`${API_URL}/jobs/${jobsId}`, {withCredentials: true})
           setJobDetail(response.data)
        }
        getData()
    }, [])

    if(!jobsDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnEdit} = props
    const {btnDelete} = props
    return (
        <div>
            <h3>Edit Component</h3>
            <h3>Edit this job</h3>
            <form onSubmit={(event) => { btnEdit(event, jobsDetail._id)  }} >
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="username"  type="text"  placeholder="Enter username"/>
            <input  name="skills"  type="enum"  placeholder="Enter skills"/>
            <input  name="details"  type="text"  placeholder="Enter details"/>
            <input  name="date"  type="Date"  placeholder="Enter desc"/>
            <input  name="price"  type="Number"  placeholder="Enter price"/>
            <input  name="contact"  type="text"  placeholder="Enter contact"/>
                <button  type="submit"  >Edit</button>
                <button onClick={() => { btnDelete(jobs._id)  }  } >Delete</button>
		    </form>
            </div>
)
    }
    export default EditForm
