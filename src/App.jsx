import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSeeker from "./Components/Admin/AdminSeekerList";
import AdminRecruiter from "./Components/Admin/AdminRecruiterList";
import SeekerLogin from "./Components/JobSeeker/SeekerLogin";
import SeekerRegister from "./Components/JobSeeker/SeekerRegister";
import About from "./Components/LandingPage/About";
import Contact from "./Components/LandingPage/Contact";
import FindJob from "./Components/LandingPage/FindJob";
import Footer from "./Components/LandingPage/Footer";
import Home from "./Components/LandingPage/Home";
import NavBar from "./Components/LandingPage/NavBar";
import PostJob from "./Components/Recruiter/PostJob";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin";
import RecruiterRegister from "./Components/Recruiter/RecruiterRegiter";
import AdminDasboard from "./Components/Admin/AdminDashboard";
import RecruiterPostedJobs from "./Components/Recruiter/PostedJobs"
function App(){
 return (
  <> 
<BrowserRouter>
<NavBar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/findjob" element={<FindJob/>} />
<Route path="/about" element={<><About/></>}/>
<Route path="/contact" element={<><Contact/></>} />
{/* admin routes */}
<Route path="/admin" element={<AdminDasboard/>} />
<Route path="/admin/seekerlist" element={<><AdminSeeker/></>} />
<Route path="/admin/recruiterlist" element={<><AdminRecruiter/></>} />
<Route path="/admin/login" element={<><AdminLogin/></>}/>
<Route path="/admin/update" element={<h1>Admin Profile update</h1>}/>
  {/* Seeker */}
 <Route path="/seeker/register" element={<><SeekerRegister/></>}/> 
 <Route path="/seeker/login" element={<><SeekerLogin/></>} />
 <Route path="/seeker" element={<h1>Seeker Dashboard</h1>}/>
 <Route path="/seeker/jobapply" element={<h1>Seeker Job apply</h1>} />
 <Route  path="/seeker/update" element={<h1>Seeker Profile Update</h1>}/>
 <Route path="/seeker/appliedjob" element={<h1>Seeker Appled Job</h1>} />
   {/* Recruiter */}
 <Route  path="/recruiter/register" element={<RecruiterRegister/>}/>  
 <Route  path="/recruiter/login" element={<><RecruiterLogin/></>}/>  
 <Route  path="/recruiter" element={<RecruiterPostedJobs/>}/>  
 <Route  path="/recruiter/postjob" element={<><PostJob/></>}/>
 <Route  path="/recruiter/appliedjob" element={<h1>Recruiter Applied Job list </h1>}/>
 <Route  path="/recruiter/update" element={<h1>Recruiter Profile Update </h1>}/>
 
<Route path="*" element={<h1>404 Page not found</h1>}/>    
</Routes>
<Footer/>
  </BrowserRouter>
  </>
 )
}

export default App;