import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useLocation

function NavBar() {
  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");
  const nav = useNavigate();    

  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    const temUserType = JSON.parse(localStorage.getItem("userType"));
    setUserType(temUserType);
  }, [location.pathname]); 

  const adminLogout = () => {
     localStorage.removeItem("data");
     localStorage.removeItem("userType");
    nav("/admin/login"); 
  };

  const seekerLogout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
   nav("/seeker/login"); 
 };
 const recruiterLogout = () => {
  localStorage.removeItem("data");
  localStorage.removeItem("userType");
 nav("/recruiter/login"); 
};


  if(userType=="admin"){
    return (
      <> 
     <div className="row navbar_main_row mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
           <h1 onClick={adminLogout}>AdminLogo</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin">
                 Dashborad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin/seekerlist">
                 seekerList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin/recruiterlist">
                 recruiterList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin/update">
                 profile
                </Link>
              </li>
              <li className="nav-item" onClick={adminLogout}>
                <Link className="nav-link nav_font" aria-current="page" >
                 logOut
                </Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  }
  else if(userType=="seeker"){
    return (
      <> 
     <div className="row navbar_main_row mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
           <h1>Seeker</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker">
                 Dashborad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker/jobapply">
                 applyJob
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker/appliedjob">
                 appliedJob
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker/update">
                 ProfileUpdate
                </Link>
              </li>              
              <li className="nav-item" onClick={seekerLogout}>
                <Link className="nav-link nav_font" aria-current="page" >
                 logOut
                </Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  }
  else if(userType=="recruiter"){
    return (
      <> 
     <div className="row navbar_main_row mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
           <h1>RecruiterLogo</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter">
                 Dashborad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter/PostJob">
                 JobPost
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter/appliedjob">
                 AppliedJob
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter/update">
                 profile
                </Link>
              </li>
              <li className="nav-item" onClick={recruiterLogout}>
                <Link className="nav-link nav_font" aria-current="page" >
                 logOut
                </Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  }
  else{
     return (
    <> 
   <div className="row navbar_main_row mb-1">
  <div className="col-sm-1"></div>
  <div className="col-sm-10">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src="/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav_font" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/findjob">
                Find a Job
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav_font"
                to="/contact"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* First Dropdown */}
          <div className="dropdown ms-auto mt-2">
            <button
              className="btn btn-outline-danger dropdown-toggle custom-btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <b>Registration</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="recruiter/register">
                  Recriuter 
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seeker/register">
                  Job Seeker
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Dropdown */}
          <div className="dropdown ms-4 mt-2">
            <button
              className="btn btn-outline-danger dropdown-toggle custom-btn"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <b> Login</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
              <li>
                <Link className="dropdown-item" to="/admin/login">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/recruiter/login">
                Recriuter Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seeker/login">
                  Seeker Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="col-sm-1"></div>
</div>
    
    </>
 )
  } 

}

export default NavBar;