import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {Button} from  'react-bootstrap'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'


function AddForm(props){
	const theme = useTheme();

	const {btnSubmit} = props

	return (
		<form onSubmit={btnSubmit}>
			<p>Name</p>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="username"  type="text"  placeholder="Enter username"/>
            <input  name="skills"  type="enum"  placeholder="Enter skills"/>
            <input  name="details"  type="text"  placeholder="Enter details"/>
            <input  name="date"  type="Date"  placeholder="Enter desc"/>
            <input  name="price"  type="Number"  placeholder="Enter price"/>
            <input  name="contact"  type="text"  placeholder="Enter contact"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddForm