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
import formatDate from "@bitty/format-date";
import "../jobCard.css";

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
  const { user, jobs, btnAdd } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(user);
  console.log(jobs);

  let filteredJobs = jobs.filter((elem) => {
    return elem.username._id !== user._id;
  });

  console.log(filteredJobs);
  let finalJobs = filteredJobs.filter((elem) => {
    return elem.accepted == false;
  });
  console.log("finalJobs", finalJobs);
  return (
    <div>
      {finalJobs.map((elem) => {
        return (
          <div className="container-jobCard">
            <Card
              className="single-card"
              sx={{ maxWidth: 345, marginBottom: 5 }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#FCE2D3" }} aria-label="recipe">
                    {elem.username.image}
                  </Avatar>
                }
                action={<IconButton aria-label="settings"></IconButton>}
                title={elem.jobTitle}
                subheader={elem.username.name}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Skills needed:
                  {elem.skills}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finishing by:{elem.deadline}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={() => {
                    console.log("asdasd");
                    btnAdd(elem._id);
                  }}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
                <Button
                  style={{ backgroundColor: "#2E2C2C" }}
                  variant="contained"
                  size="small"
                >
                  Chat
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
