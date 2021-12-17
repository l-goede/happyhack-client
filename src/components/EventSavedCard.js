import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../event.css";

export default function EventSavedCard(props) {
  const { user, events, btnDeleteEvent } = props;

  // let filteredEvents = events.filter((elem) => {
  //   return elem.saved === user._id;
  // });
  console.log("event saved", events);
  return (
    <div>
      {user.events.map((elem) => {
        return (
          <div>
            <Card sx={{ maxWidth: 345, marginBottom: 5, marginRight: 5 }}>
              <CardMedia
                style={{ height: 100 }}
                component="img"
                height="140"
                image={elem.image}
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
                <Button
                  style={{ color: "#D69B7B", fontSize: 15 }}
                  onClick={() => {
                    btnDeleteEvent(elem._id);
                  }}
                  size="small"
                >
                  delete
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
