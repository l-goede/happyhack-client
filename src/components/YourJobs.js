import React from "react";
import JobCreatedCard from "./JobCreatedCard";
import JobAcceptedCard from "./JobAcceptedCard";

function YourJobs(props) {
  const { user, jobs, btnDelete, btnEditJob } = props;
  console.log(jobs);
  return (
    <div>
      <h1>Jobs you created</h1>
      <JobCreatedCard
        user={user}
        jobs={jobs}
        btnDelete={btnDelete}
        btnEdit={btnEditJob}
      />
      <h1>Jobs you accepted</h1>
      <JobAcceptedCard user={user} jobs={jobs} btnDelete={btnDelete} />
    </div>
  );
}

export default YourJobs;
