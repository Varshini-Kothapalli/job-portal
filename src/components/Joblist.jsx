import React from "react";

function Joblist({ jobs, role, onSelectJob }) {
  if (!jobs || jobs.length === 0) {
    return <p>No jobs available right now.</p>;
  }

  return (
    <div className="row">
      {jobs.map((job) => (
        <div key={job.id} className="col-md-6 mb-4">
          <div
            className="card shadow-lg border-0 h-100"
            style={{ cursor: "pointer" }}
            onClick={() => onSelectJob(job)}
          >
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold text-primary">{job.title}</h5>
              <p className="card-text mb-1">{job.company}</p>
              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt-fill"></i> {job.location}
              </p>

              <p>
                <span className="badge bg-info text-dark me-1">
                  {job.employment_type || "Not specified"}
                </span>
                {job.is_remote_work === 1 && (
                  <span className="badge bg-success text-white">Remote</span>
                )}
              </p>

              <p className="fw-semibold">
                💰{" "}
                {job.salary_from && job.salary_to
                  ? `₹${job.salary_from.toLocaleString()} - ₹${job.salary_to.toLocaleString()}`
                  : "Not specified"}
              </p>

              <div className="mb-3">
                {Array.isArray(job.roles) &&
                  job.roles.slice(0, 3).map((roleItem, index) => (
                    <span
                      key={index}
                      className="badge bg-light text-dark border me-1 mb-1"
                    >
                      {roleItem}
                    </span>
                  ))}
              </div>

              <div className="mt-auto d-flex gap-2">
                {role === "seeker" && (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Apply clicked!");
                    }}
                  > Apply  </button>
                )}

                {role === "recruiter" && (
                  <>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Edit clicked!");
                      }}
                    > Edit </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Delete clicked!");
                      }}
                    > Delete </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Joblist;