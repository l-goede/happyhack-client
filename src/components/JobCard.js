import * as React from "react";
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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// //-------------------------------------------------------
// //                        Edit opt
// //-------------------------------------------------------
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
//-----------------------------------------------------------------

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
//-----------------------------------------------------------------



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
//--------------------------------------------------------------------


export default function RecipeReviewCard(props) {


  //-------------------------------------------------------
  //                        MUI edit
  //-------------------------------------------------------
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const { jobsId } = useParams()
  const [jobsDetail, setJobDetail] = useState(null)
  const { jobs } = props
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

  //-------------------------------------------------------

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //------------------------------------------------------------------
  //                           MUI Modal
  //------------------------------------------------------------------

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //------------------------------------------------------------------
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marcos Dias"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobs.jobTitle}
          heeeey
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

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
                                   Function to edit it
------------------------------------------------------------------------------- */}
                {
                  <div>
                    <form onSubmit={(event) => { btnEdit(event, jobsDetail._id) }} >
                      <input name="name" type="text" placeholder="Enter name" />
                      <input name="username" type="text" placeholder="Enter username" />
                      <FormControl sx={{ m: 1, width: 300 }}> <InputLabel id="demo-multiple-name-label"> Skills needed </InputLabel>   <Select class="form-select"
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          value={personName}
                          name="skills"
                          onChange={handleChange}
                          input={<OutlinedInput label="Name" />}
                          MenuProps={MenuProps}
                        >
                          {skills.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}

                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <input name="details" type="text" placeholder="Enter details" />
                      <input name="date" type="Date" placeholder="Enter desc" />
                      <input name="price" type="Number" placeholder="Enter price" />
                      <input name="contact" type="text" placeholder="Enter contact" />
                      <button type="submit"  >Edit</button>
                      <button onClick={() => { btnDelete(jobs._id) }} >Delete</button>
                    </form>
                  </div>
                }
                {/* ------------------------------------------------------------------------------ */}

              </Box>
            </Fade>
          </Modal>
        </div>
        {/* ------------------------------------------------------------------------------ */}

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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

