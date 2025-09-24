import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navabar({ role, setRole }  ){
    return(
        <Navbar bg="primary"  className="px-4">
      
        <div className="container">
        <h1 className="text-white">JobHub</h1>
        <Nav className="me-auto ms-5 ">
          <Nav.Link href="#jobs" className="text-white">Jobs</Nav.Link>
          <Nav.Link href="#companies" className="text-white">Companies</Nav.Link>
          <Nav.Link href="#salary" className="text-white">Salary</Nav.Link>
          <Nav.Link href="#resources" className="text-white">Resources</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-2">
          
          <Button
            variant={role === "seeker" ? "light" : "outline-light"}
            size="sm"
            onClick={() => setRole("seeker")}
          >
            Job Seeker
          </Button>
          <Button
            variant={role === "recruiter" ? "light" : "outline-light"}
            size="sm"
            onClick={() => setRole("recruiter")}
          >
            Recruiter
          </Button>

          <Button variant="outline-light" className="ms-2">
            Sign In
          </Button>
          <Button variant="light" className="ms-2 text-primary">
            Post a Job
          </Button>
        </div>
        </div>
      
    </Navbar>
    )
}
export default Navabar