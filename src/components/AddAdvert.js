import {Button} from  'react-bootstrap'

function AddForm(props){

	const {btnSubmit} = props
	return (
		<form onSubmit={btnSubmit}>
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