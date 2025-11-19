import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Banner from "../component/Banner/Banner";
import Content from '../component/Content'
import Content2 from '../component/Content2'
import Footer from '../component/Footer/Footer'
import Homecard2 from '../component/Homecard2'
const Home = () => {
  return (
  <div> 
  <Banner/>
  {/* <Homecard2/> */}

  <Content/>
  <Content2/>
  <Footer/>
  </div>
)
};

export default Home;
            