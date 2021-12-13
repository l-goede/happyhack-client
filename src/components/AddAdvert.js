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
			<input  name="jobTitle"  type="text"  placeholder="Enter a jobTitle"/>
			<input  name="jobDescription"  type="text"  placeholder="Enter a Job Description"/>
            <input  deadline="date"  type="Date"  placeholder="Enter deadline"/>
            <input  name="price"  type="Number"  placeholder="Enter price"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddForm