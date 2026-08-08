import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Home from './Pages/Home.jsx'
 import Jobs from './Pages/Jobs.jsx'
import JobsDetails from './Pages/JobsDetails.jsx';



function App() {
 
  return (
 <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/jobs" element={<Jobs />}/>
    <Route path="/jobs/:id" element={<JobsDetails />}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
