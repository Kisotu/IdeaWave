import "../assets/css/style.css"


import Navbar from "../components/Navbar"
import Landing from "../components/Landing"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"

export const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Hero />
      <Pricing />
      <Contact />
    </>
  )
}
export default Home