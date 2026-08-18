import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Home from './Pages/Home.jsx'
 import Jobs from './Pages/Jobs.jsx'
import JobsDetails from './Pages/JobsDetails.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loggin from './Pages/Loggin.jsx';
import Application from './Pages/Application.jsx';
import Signup from './Pages/Signup.jsx';
import SavedJobs from './Pages/SavedJobs.jsx';
import Company from './Pages/Company.jsx';
import About from './Pages/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Nav from './components/Nav/Nav.jsx';


function App() {

  return (
 <BrowserRouter>
 <Nav />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/loggin" element={<Loggin />}/>
    <Route path="/jobs" element={<Jobs />}/>
    <Route path="/jobs/:id" element={<JobsDetails />}/>
    <Route path="/loggin/:jobId" element={<Loggin />}></Route>
    <Route path="/application/:jobId" element={<Application />} />
    <Route path="/signup" element={<Signup />}></Route>
     <Route path="/saved-jobs" element={<SavedJobs />}></Route>
      <Route path="/company" element={<Company />}></Route>
        <Route path="/about" element={<About />}></Route>

  </Routes>
    <Footer /> 

</BrowserRouter>
  )
}

export default App
