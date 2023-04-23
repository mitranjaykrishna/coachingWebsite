import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import ServicesData from "./ServicesData";

const AppContext=React.createContext();

const initialState={
    heroTopData:"",
    heading:"", 
    heading1:"",
    heroPara:"",
    groupButton1:"",
    link1:"",
    groupButton2:"",
    link2:"",
    pageImage:"",
    services: [],
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
                groupButton1:"Login",
                link1: "",
                groupButton2:"Register",
                link2:"",
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
                heroPara:"LOrem Impsum",
                groupButton1:"Contact Us",
                link1:"/contact",
                groupButton2:"Services",
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