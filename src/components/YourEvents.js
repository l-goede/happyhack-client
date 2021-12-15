import React from "react";

import EventSavedCard from "./EventSavedCard";

function YourJobs(props) {
  const { user, events, btnDeleteEvent } = props;
  return (
    <div>
      <h1>Your events</h1>
      <EventSavedCard
        user={user}
        events={events}
        btnDeleteEvent={btnDeleteEvent}
      />
    </div>
  );
}

export default YourJobs;
