//Rushina Sherstha Home Page
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

// Home page component that displays the main sections of the website
const Home = () => {
  return (
    <div>
      {/* Hero section with main banner and call-to-action */}
      <Hero />
      
      {/* Section showing the latest products */}
      <LatestCollection/>
      
      {/* Section showing best-selling products */}
      <BestSeller/>
      
      {/* Section explaining store policies and benefits */}
      <OurPolicy/>
      
      {/* Newsletter subscription section */}
      <NewsletterBox/>
    </div>
  )
}

export default Home
