import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Home from './Pages/Home.jsx'
 import Jobs from './Pages/Jobs.jsx'
import JobsDetails from './Pages/JobsDetails.jsx';
// import Footer from './components/Footer/Footer.jsx';
import Loggin from './Pages/Loggin.jsx';
import Application from './Pages/Application.jsx';



function App() {
 
  return (
 <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/jobs" element={<Jobs />}/>
    <Route path="/jobs/:id" element={<JobsDetails />}/>
    <Route path="/loggin/:jobId" element={<Loggin />}></Route>
    <Route path="/application/:jobId" element={<Application />} />

  </Routes>
  {/* <Footer /> */}

</BrowserRouter>
  )
}

export default App
