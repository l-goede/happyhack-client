import React from "react";
import JobCreatedCard from "./JobCreatedCard";
import JobAcceptedCard from "./JobAcceptedCard";
import "../yourJobs.css";

function YourJobs(props) {
  const { user, jobs, btnDelete, btnEditJob } = props;
  console.log(jobs);
  return (
    <div className="container-totalJobPage">
      <div className="container-jobs">
        <div className="container-jobsCreated">
          <h2 className="first-h2">Jobs you created</h2>
          <div className="created">
            <JobCreatedCard
              className="jobCreatedCard"
              user={user}
              jobs={jobs}
              btnDelete={btnDelete}
              btnEdit={btnEditJob}
            />
          </div>
        </div>
        <div className="container-jobsAccepted">
          <h2 className="second-h2">Jobs you accepted</h2>
          <div className="accepted">
            <JobAcceptedCard
              className="jobAcceptedCard"
              user={user}
              jobs={jobs}
              btnDelete={btnDelete}
            />
          </div>
        </div>
      </div>
      <div className="divide-jobs"></div>
    </div>
  );
}

export default YourJobs;
