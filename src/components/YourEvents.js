import React from "react";

import EventSavedCard from "./EventSavedCard";

function YourJobs(props) {
  const { user, events, btnDeleteEvent } = props;
  return (
    <div className="container-events">
      <div>
        <h2 className="event-h2">Your Events</h2>
      </div>
      <div className="eventCards">
        <div>
          <EventSavedCard
            user={user}
            events={events}
            btnDeleteEvent={btnDeleteEvent}
          />
        </div>
      </div>
    </div>
  );
}

export default YourJobs;
