function JobDetails({ job }) {
  if (!job) {
    return (
      <div className="p-4 text-center text-muted">
        <h5>Select a job to view details</h5>
      </div>
    );
  }

  return (
    <div className="card shadow-lg border-0 h-100">
      <div className="card-body">
        <h3 className="fw-bold text-primary">{job.title}</h3>
        <h6 className="text-muted">{job.company}</h6>
        <p className="mb-2">
          <i className="bi bi-geo-alt-fill"></i> {job.location}{" "}
          {job.is_remote_work === 1 && (
            <span className="badge bg-success ms-2">Remote</span>
          )}
        </p>
        <p className="fw-semibold mb-2">
          💰{" "}
          {job.salary_from && job.salary_to
            ? `₹${job.salary_from.toLocaleString()} - ₹${job.salary_to.toLocaleString()}`
            : "Not specified"}
        </p>
        <p>
          <span className="badge bg-info text-dark">
            {job.employment_type || "Not specified"}
          </span>
        </p>
        <hr />
        <h6 className="fw-bold">Job Description</h6>
        <p className="text-muted">{job.description}</p>

        
        {job.qualifications && (() => {
  let qualificationsArray = [];

  if (Array.isArray(job.qualifications)) {
    qualificationsArray = job.qualifications;
  } else {
    try {
      qualificationsArray = JSON.parse(job.qualifications);
    } catch {
      qualificationsArray = [];
    }
  }

  return qualificationsArray.length > 0 ? (
    <>
      <h6 className="fw-bold">Qualifications</h6>
      <ul>
        {qualificationsArray.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </>
  ) : (
    <p className="text-muted">No qualifications listed.</p>
  );
})()}

       
        <div className="mt-3">
          <p>
            <strong>Category:</strong> {job.job_category}
          </p>
          <p>
            <strong>Openings:</strong> {job.number_of_opening}
          </p>
          <p>
            <strong>Application Deadline:</strong> {job.application_deadline}
          </p>
        </div>

      
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-success btn-sm">Apply Now</button>
         
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
