import * as React from "react";
import { useNavigate } from 'react-router-dom'
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//----------------------------------------------------------------------------------------
//                Marcos changes for drop down
//----------------------------------------------------------------------------------------
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {UserContext} from "../context/app.context"
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const ITEM_PADDING_RIGHt = 300;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP + 0 + ITEM_PADDING_RIGHt,
      width: 250,
    },
  },
};

const skills = [
  'Javascript',
  'React',
  'Typescript',
  'Python',
  'C#',
  'Java',
  'PHP',
  'Angular',
  'VueJS',
  'NodeJS',
  'ExpressJS',
  'MondogoDB',
  'Mongoose',
  'MySQL',
  'UX/UI',
  'Figma',
  'Adobe XD',
];

function getStyles(skills, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(skills) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
//-----------------------------------------------------------------------------------------
//                    chat box
//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------
const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCard(props) {

  //-----------------------------------------------------------
  //                      Marcos changes 
  //-----------------------------------------------------------
  //                        MUI edit
  //-------------------------------------------------------
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const { jobsId } = useParams()
  const [jobsDetail, setJobDetail] = useState(null)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const { btnEdit } = props
  const { btnDelete } = props
   const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //-------------------------------------------------------------
  const { jobs, user } = props;
  const [expanded, setExpanded] = React.useState(false);
  let filteredJobs = jobs.filter((elem) => {
    console.log(elem.username)
    return elem.username === user._id;

  });

  return (
    <div>
      { ! filteredJobs ? " " : filteredJobs.map((elem) => {

        return (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {elem.image}
                  </Avatar>
                }
                action={<IconButton aria-label="settings"></IconButton>}
                title={elem.jobTitle}
                subheader={user.name}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Skills needed:
                  {elem.skills}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finishing by: {elem.deadline}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
{/* ------------------------------------------------------------------------------
                               MUI Modal
 ------------------------------------------------------------------------------ */}
        <div>
          <Button onClick={handleOpen}>Edit</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 400,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Edit this job offer
                </Typography>
{/* -------------------------------------------------------------------------------
                             Marcos      Function to edit it
------------------------------------------------------------------------------- */}
                {
                  <div>
                    <form onSubmit={(event) => { btnEdit(event, elem._id) }} >
                      <input name="jobTitle" type="text" defaultValue={elem.jobTitle} />
                      <input name="jobDescription" type="text" defaultValue={elem.jobDescription} />
                      <FormControl sx={{ m: 1, width: 300 }}> <InputLabel id="demo-multiple-name-label"> Skills needed </InputLabel>   <Select class="form-select"
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          defaultValue={elem.skills}
                          name="skills"
                          onChange={handleChange}
                          input={<OutlinedInput label="Name" />}
                          MenuProps={MenuProps}
                        >
                          {skills.map((skill) => (
                            <MenuItem
                              key={skill}
                              value={skill}
                              style={getStyles(skill, personName, theme)}

                            >
                              {skill}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <input name="deadline" type="date" defaultValue={elem.deadline} />
                      <input name="jobDescription" type="text" defaultValue={elem.jobDescription} />
                      <input name="price" type="Number" defaultValue={elem.price} />
                      <button type="submit"  >Edit</button>
                      <button onClick={() => { btnDelete(jobs._id) }} >Delete</button>
                    </form>
                  </div>
                }
              </Box>
            </Fade>
          </Modal>
        </div>
        {/* ------------------------------------------------------------------------------ */}

                <Button onClick={() => { btnDelete(jobs._id) }} variant="contained" size="small">
                  
                  Delete
                </Button>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Job Description:</Typography>
                  <Typography paragraph>{elem.jobDescription}</Typography>
                  <Typography paragraph>
                    I am offering {elem.price} €.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
