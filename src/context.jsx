import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import ServicesData from "./ServicesData";

const AppContext=React.createContext();

const initialState={
    heroTopData:"",
    heading:"", 
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
                heroTopData:"The only name of trust and success",
                heading:"Saraswati Classes", 
                heroPara:"with determination to get the best results",
                groupButton1:"Login",
                link1: "",
                groupButton2:"Register",
                link2:"",
                pageImage:"./images/CEOImage.png",
            },
        });
    };

    const updateAboutPage=()=>
    {
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                heroTopData:"About Us",
                heading:"./images/logo.png" ,
                heroPara:"Before using our tools you should know who we are and how can we help. You may not trust us because of any past experience or because some of your friends got scammed from some group buy tools. But to be honest it's not their mistake. Many companies use unethical ways to because of this they don't last long. To avoid any such things from happening to any of our customers we do our work in an ethical way. We buy the tool at real prices and share it with a group of people. This makes it affordable for everyone and accessible from anywhere in this world. So instead of spending thousands of money on buying one tool, you are going to get multiple tools for a cheap price. We understand that budget matters a lot for you this is why we are here to help you save lots of money every month.",
                groupButton1:"Contact Us",
                link1:"/contact",
                groupButton2:"Services",
                link2:"/services",
                pageImage:"./images/about.svg",
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