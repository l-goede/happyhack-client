import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

function EditForm(props) {
    const {todoId} = useParams()

    const [todoDetail, setTodoDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/todos/${todoId}`, {withCredentials: true})
           setTodoDetail(response.data)
        }
        getData()
    }, [])

    if(!todoDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnEdit} = props
    return (
        <div>
            <h3>Edit Component</h3>

            <form onSubmit={(event) => { btnEdit(event, todoDetail._id)  }} >
            
            {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
            {/* <form onSubmit={btnEdit} > */}

                <input defaultValue={todoDetail.name} name="name"  type="text"  placeholder="Enter name"/>
                <input defaultValue={todoDetail.description} name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit"  >Edit</button>
		    </form>
        </div>
    )
}

export default EditForm