import React from 'react'
import HeroSection from '../components/main/Herosection'
import CardSection from '../components/main/CardSection'
import About from '../components/main/About'
import Footer from '../components/main/Footer'
// import TeamMember from '../components/main/TeamMember'
export const Main = () => {
    return (
        <div>
            <HeroSection />
            <CardSection />
            <About />
            
            <Footer />
           
        </div>
    )
}
