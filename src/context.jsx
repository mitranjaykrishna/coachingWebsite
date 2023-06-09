import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import ServicesData from "./ServicesData";
import FacultyData from "./FacultyData";


const AppContext=React.createContext();

const initialState={
    heroTopData:"",
    heading:"", 
    heading1:"",
    heroPara:"",
    heroPara1:"",
    groupButton1:"",
    link1:"",
    groupButton2:"",
    link2:"",
    pageImage:"",
    services: [],
    faculties:[],
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const updateHomePage=()=>
    {
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                heroTopData:"विश्वास एवं सफलता का एकमात्र नाम",
                heading:"Saraswati Classes",
                heading1:"An effective way of learning",
                heroPara:"सर्वश्रेष्ठ परिणाम के संकल्प के साथ",
                heroPara1:"",
                groupButton1:"contact",
                link1: "/contact",
                groupButton2:"Courses",
                link2:"/services",
                pageImage:"./images/logo.png",
            },
        });
    };

    const updateAboutPage=()=>
    {
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                heroTopData:"About Us",
                heading:"Saraswati Classes" ,
                heading1:"An effective way of learning",
                heroPara:"सर्वश्रेष्ठ परिणाम के संकल्प के साथ",
                heroPara1:`Saraswati Coaching is a premier educational institute that was established in 2013 by its founder, Deepak Upadhaya. The coaching center is dedicated to providing quality education to students who aspire to excel in their academic pursuits.
                At Saraswati Coaching, we firmly believe that the success of our students is our success. Therefore, we are committed to providing a student-oriented learning environment that focuses on the unique needs of each individual student. We offer a range of courses that cater to students from various educational backgrounds and levels of proficiency.`,
                groupButton1:"Contact Us",
                link1:"/contact",
                groupButton2:"Courses",
                link2:"/services",
                pageImage:"./images/CEOImage.png",
            },
        });
    };

    const getServices=()=>
    {
        return dispatch({
            type:"SERVICES_UPDATE",
            payload:ServicesData,
        });
    }

    useEffect(() => getServices(),[]);

    const getFaculty=()=>
    {
        return dispatch({
            type:"Faculty_UPDATE",
            payload:FacultyData,
        });
    }

    useEffect(() => getFaculty(),[]);
    
    return (
        <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
        </AppContext.Provider>
    
    );
};


const useGlobalContext=()=>{
    return useContext(AppContext);
};
export { AppProvider, useGlobalContext} ;