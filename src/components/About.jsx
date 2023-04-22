import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "./HeroSection";

const About=() =>{
    const { updateAboutPage }=useGlobalContext();
    useEffect(() => updateAboutPage());
    return (
        <>
            <HeroSection/>         
        </>
    );

};

export default About;