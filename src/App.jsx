import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Home from './Pages/Home.jsx'
 import Jobs from './Pages/Jobs.jsx'
import JobsDetails from './Pages/JobsDetails.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {
 
  return (
 <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/jobs" element={<Jobs />}/>
    <Route path="/jobs/:id" element={<JobsDetails />}/>
  </Routes>
  <Footer />
</BrowserRouter>
  )
}

export default App
