import React from "react";
import EventCard from "./EventCard";
import "../event.css";

function Events(props) {
  const { events, btnSave, user } = props;
  return (
    <div className="container-events">
      <div>
        <h2 className="event-h2">Upcoming events</h2>
      </div>
      <div className="eventCards">
        {events.map((elem) => {
          console.log(elem._id);
          let userEventIds = user.events.map((e) => e._id);
          let isClicked = userEventIds.includes(elem._id);
          console.log(isClicked);
          return (
            <div className="eventCard">
              <EventCard event={elem} btnSave={btnSave} isClicked={isClicked} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
