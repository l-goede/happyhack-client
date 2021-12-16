import React from "react";
import EventCard from "./EventCard";

function Events(props) {
  const { events, btnSave, user } = props;
  return (
    <div>
      <h1>EVENT PAGE</h1>
      {events.map((elem) => {
        console.log(elem._id);
        let userEventIds = user.events.map((e) => e._id);
        let isClicked = userEventIds.includes(elem._id);
        console.log(isClicked);
        return (
          <div>
            <EventCard event={elem} btnSave={btnSave} isClicked={isClicked} />
          </div>
        );
      })}
    </div>
  );
}

export default Events;
