import { useState,useEffect } from "react";
import Jobform from './components/Jobform'
import Jobdetails from './components/Jobdetails'
import Joblist from './components/Joblist'
import  Navabar  from './components/Navabar'
import ApplyForm from './components/Applyform'
import Sidebar from "./components/Sidebar";
function App(){
  const [jobs, setJobs] = useState([]);
  const [role, setRole] = useState("seeker"); 
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  useEffect(() => {
    fetch("https://jsonfakery.com/jobs")
      .then((res) => res.json())
      
        .then((data) => { console.log(data); setJobs(data)})
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);
  const handleFilterChange = (types, locations, experience) => {
  let filtered = [...jobs];

  // Filter by employment type
  if (types.length > 0) {
    filtered = filtered.filter((job) =>
      types.some((t) =>
        job.employment_type?.toLowerCase().includes(t.toLowerCase())
      )
    );
  }

  // Filter by location
  if (locations.length > 0) {
    filtered = filtered.filter((job) =>
      locations.includes(job.location)
    );
  }

  // Filter by experience (simplified logic based on qualifications text)
  if (experience) {
    filtered = filtered.filter((job) => {
      let quals = [];
      try {
        quals = JSON.parse(job.qualifications);
      } catch {
        quals = [];
      }

      const text = quals.join(" ").toLowerCase();

      if (experience === "Fresher") {
        return text.includes("fresher") || !text.includes("year");
      }
      if (experience === "1-3 years") {
        return text.includes("1 year") || text.includes("2 years") || text.includes("3 years");
      }
      if (experience === "3+ years") {
        return text.includes("4 years") || text.includes("5 years") || text.includes("advanced");
      }
      return true;
    });
  }

  setFilteredJobs(filtered);
};
  return(
    <div>
        
      <div className="container-fluid">
      <Navabar role={role} setRole={setRole} />
      <div className="row mt-3">
        <div className="col-md-3">
          <Sidebar  jobs={jobs} onFilterChange={handleFilterChange} />
        </div>
        <div className="col-md-5">
          <Joblist jobs={filteredJobs} role={role} onSelectJob={setSelectedJob} />
        </div>
        <div className="col-md-4">
    <Jobdetails job={selectedJob} />
  </div>
      </div>
    </div>
      
    </div>
  )
}
export default App;
