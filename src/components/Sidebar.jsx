import { useState, useEffect } from "react";

function Sidebar({ jobs=[], onFilterChange }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");

  const jobTypes = ["Full-time", "Part-time", "Intern", "Contract"];
  const experienceLevels = ["Fresher", "1-3 years", "3+ years"];

  
  const locations = [...new Set(jobs.map((job) => job.location))];
  const handleTypeChange = (type) => {
    let updated;
    if (selectedTypes.includes(type)) {
      updated = selectedTypes.filter((t) => t !== type);
    } else {
      updated = [...selectedTypes, type];
    }
    setSelectedTypes(updated);
    onFilterChange(updated, selectedLocations, selectedExperience);
  };

  const handleLocationChange = (location) => {
    let updated;
    if (selectedLocations.includes(location)) {
      updated = selectedLocations.filter((loc) => loc !== location);
    } else {
      updated = [...selectedLocations, location];
    }
    setSelectedLocations(updated);
    onFilterChange(selectedTypes, updated, selectedExperience);
  };

  const handleExperienceChange = (exp) => {
    setSelectedExperience(exp);
    onFilterChange(selectedTypes, selectedLocations, exp);
  };

  return (
    <div className="p-3 border rounded bg-light h-100">
      <h5 className="fw-bold mb-3">Filter Jobs</h5>

      <div className="mb-3">
        <h6 className="text-muted">Employment Type</h6>
        {jobTypes.map((type, idx) => (
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
              id={`filter-type-${idx}`}
            />
            <label className="form-check-label" htmlFor={`filter-type-${idx}`}>
              {type}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <h6 className="text-muted">Location</h6>
        {locations.slice(0, 5).map((location, idx) => ( // show top 5, can expand
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={selectedLocations.includes(location)}
              onChange={() => handleLocationChange(location)}
              id={`filter-location-${idx}`}
            />
            <label
              className="form-check-label"
              htmlFor={`filter-location-${idx}`}
            >
              {location}
            </label>
          </div>
        ))}
      </div>

      {/* Experience Filter */}
      <div className="mb-3">
        <h6 className="text-muted">Experience Level</h6>
        {experienceLevels.map((exp, idx) => (
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="radio"
              name="experience"
              checked={selectedExperience === exp}
              onChange={() => handleExperienceChange(exp)}
              id={`filter-exp-${idx}`}
            />
            <label className="form-check-label" htmlFor={`filter-exp-${idx}`}>
              {exp}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
