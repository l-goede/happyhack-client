import React from "react";

import EventSavedCard from "./EventSavedCard";

function YourJobs(props) {
  const { user, events, btnDeleteEvent } = props;
  return (
    <div>
      <h2>UPCOMING EVENTS</h2>
      <EventSavedCard
        user={user}
        events={events}
        btnDeleteEvent={btnDeleteEvent}
      />
    </div>
  );
}

export default YourJobs;
