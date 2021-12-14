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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";




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
export default function JobCreatedCard({ user, jobs }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.image}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={jobs.jobTitle}
        subheader={user.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Skills needed:
          {jobs.skills}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Finishing by: {jobs.deadline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" size="small">
          Edit
        </Button>
        <Button variant="contained" size="small">
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
          <Typography paragraph>{jobs.jobDescription}</Typography>
          <Typography paragraph>I am offering {jobs.price} €.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}