import {Button} from  'react-bootstrap'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'

function AddForm(props){

	const {name} = useContext(UserContext)

	const {btnSubmit} = props

	return (
		<form onSubmit={btnSubmit}>
			<p>Name</p>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="username"  type="text"  placeholder="Enter desc"/>
            <input  name="skills"  type="enum"  placeholder="Enter skills"/>
            <input  name="details"  type="text"  placeholder="Enter details"/>
            <input  name="date"  type="Date"  placeholder="Enter desc"/>
            <input  name="price"  type="Number"  placeholder="Enter desc"/>
            <input  name="contact"  type="text"  placeholder="Enter desc"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddForm