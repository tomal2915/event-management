
import AboutUs from "../../components/aboutUs/AboutUs"
import Banner from "../../components/banner/Banner"
import EventHome from "../../components/eventHome/eventHome"
import Teams from "../../components/teams/Teams"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="" data-aos="fade-up">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <EventHome></EventHome>
      <Teams></Teams>
    </div>
  )
}

export default Home