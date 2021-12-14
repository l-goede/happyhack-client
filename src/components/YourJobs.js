import React from "react";

import JobCreatedCard from "./JobCreatedCard";
import JobAcceptedCard from "./JobAcceptedCard";

function YourJobs(props) {
  const { user, jobs } = props;
  return (
    <div>
      <h1>Jobs you created</h1>
      <JobCreatedCard user={user} jobs={jobs} />
      <h1>Jobs you accepted</h1>
      <JobAcceptedCard user={user} jobs={jobs} />
    </div>
  );
}

export default YourJobs;
