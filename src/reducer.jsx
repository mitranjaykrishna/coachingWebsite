

const reducer = (state,action)=>{

    if(action.type === "HOME_UPDATE")
    {
        return {
            ...state,
            heroTopData: action.payload.heroTopData,
            heading: action.payload.heading,
            heading1: action.payload.heading1, 
            heroPara: action.payload.heroPara,
            groupButton1: action.payload.groupButton1,
            link1:action.payload.link1,
            groupButton2: action.payload.groupButton2,
            link2:action.payload.link2,
            pageImage: action.payload.pageImage,
        };

    }
    
    if(action.type === "ABOUT_UPDATE")
    {
        return {
            ...state,
            heroTopData: action.payload.heroTopData,
            heading: action.payload.heading, 
            heading1: action.payload.heading1, 
            heroPara: action.payload.heroPara,
            groupButton1: action.payload.groupButton1,
            link1:action.payload.link1,
            groupButton2: action.payload.groupButton2,
            link2:action.payload.link2,
            pageImage: action.payload.pageImage,

        };

    }

    if(action.type === "SERVICES_UPDATE")
    {

        return {
            ...state,
            services: action.payload,

        }
    }

    return state;
};

export default reducer;