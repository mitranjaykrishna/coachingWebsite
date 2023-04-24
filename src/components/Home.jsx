import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "./HeroSection";
import Services from "./Services";
// import Contact from "./Contact";



const Home=() =>{
    const { updateHomePage }=useGlobalContext();
    useEffect(() => updateHomePage());
    return (
        <>
            <HeroSection/>
            <Services />
            {/* <Contact />             */}
            
             
                      
        </>
    );
};

export default Home;