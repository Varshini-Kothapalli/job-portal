 # Job Portal

This is a React + Vite-based job portal application that allows users to browse and filter job listings based on employment type, location, and experience level.

## 🔧 Tech Stack

- **React** (with Hooks)
- **Vite** (for fast bundling)
- **Bootstrap** (for layout and styling)
- **GitHub** (for version control)
- **CodeSandbox** (for live preview)

##  Features

- Filter jobs by:
  - Employment type (Full-time, Part-time, Intern, Contract)
  - Location (top 5 dynamically extracted)
  - Experience level (Fresher, 1–3 years, 3+ years)
- View job details and apply
- Responsive layout using Bootstrap grid
- Clean component structure with reusable logic

##  Approach

- Fetched job data from a mock API (`https://jsonfakery.com/jobs`)
- Used `useState` and `useEffect` for state and lifecycle management
- Built modular components: `Sidebar`, `JobList`, `JobDetails`, `ApplyForm`
- Implemented filtering logic in `App.js` to dynamically update job listings
- Ensured clean code with meaningful variable names and comments


