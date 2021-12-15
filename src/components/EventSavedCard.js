import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventSavedCard(props) {
  const { user, events } = props;

  let filteredEvents = events.filter((elem) => {
    return elem.username === user._id;
  });

  return (
    <div>
      {filteredEvents.map((elem) => {
        return (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">delete</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
