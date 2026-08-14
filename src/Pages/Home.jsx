import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchSection from '../components/SearchSection/SearchSection'
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs'
import TopCompanies from '../components/TopCompanies/TopCompanies'
import PopularCategories from '../components/PopularCategories/PopularCategories'
import WhyUs from '../components/WhyUs/WhyUs'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CallToAction/CTA'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden flex flex-col min-h-screen justify-center items-center hero-content">
       <div className="absolute top-0 left-72 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl float-blob"></div>
       <div className="flex flex-col justify-center items-center gap-2">
         <h1 className="text-8xl font-bold text-center text-blue-700 italic tracking-tighter [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">NEXORA</h1>
        <h3 className="tracking-wider text-gray-700 text-center mt-2">Your Road to the Future</h3>
       </div>
        <p className="tracking-wider text-gray-500 text-center mt-4">Find opportunities that shape your future
     with trusted companies around the world.</p>
     <div>
      <Link to="/jobs">
        <button className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn mt-8">Start Exploring</button>
        </Link>
    
     </div>
     <p className="text-gray-500 text-center mt-40">Scroll to Explore</p>
   <i className="fa-solid fa-arrow-down mt-2 animate-[upDown_2s_ease-in-out_infinite]"></i>
     <div className="absolute bottom-0 right-72 w-72 h-72 rounded-full bg-violet-600 opacity-30 blur-3xl float-blob-reverse"></div>
      </section>


      <Navbar />
      <FeaturedJobs />
      <TopCompanies />
      <PopularCategories />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home
