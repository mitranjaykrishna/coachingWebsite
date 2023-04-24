/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "./HeroSection";
import Services from "./Services";
// import About from "./About";
import Contact from "./Contact";
import Faculty from "./Faculty";



const Home=() =>{
    const { updateHomePage }=useGlobalContext();
    useEffect(() => updateHomePage(),[]);
    return (
        <>
            <HeroSection/>
            <Services />
            <Faculty />
            <Contact />

            
             
                      
        </>
    );
};

export default Home;