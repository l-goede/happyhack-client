import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventCard(props) {
  const { event, btnSave, isClicked } = props;

  return (
    <div>
      <Card sx={{ maxWidth: 345, marginBottom: 5, marginRight: 5 }}>
        <CardMedia
          style={{ height: 100 }}
          component="img"
          height="100"
          image={event.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
        <CardActions>
          {isClicked ? (
            <Button style={{ color: "#D69B7B", fontSize: 15 }} size="small">
              {" "}
              Saved!{" "}
            </Button>
          ) : (
            <Button
              style={{ color: "#D69B7B", fontSize: 15 }}
              onClick={() => {
                btnSave(event._id);
              }}
              size="small"
            >
              Save event
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
