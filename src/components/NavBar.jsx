import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
import "../styles/NavBar.css"



const NavBar=() =>{

    const [fix,setFix]=useState(false);

    const setFixed=()=>{
        if(window.scrollY >=0){
            setFix(true);
        }else{
            setFix(false);
        }
    }

    window.addEventListener("scroll",setFixed);

    return (
        <>
            <nav className={fix?"main_nav fix":"main_nav"}>
                <div className="logo">
                    <NavLink to="/"><img src={"./images/logo.png"} alt="Logo" /> </NavLink>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/' >           Home     </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/services' >    Courses </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/about'  >      About    </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/contact' >     Contact  </NavLink></Button></li>
                    </ul>  
                </div>
                {/* <div className="affiliated">
                    <ul >
                        <li>
                            <Box>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" className="affiButtonG buttonGroupEffect">
                                    <Button ><NavLink exact activeClassName='active' to="/login"><b className="Button1text">Login</b></NavLink></Button>
                                    <Button variant="contained"><NavLink exact activeClassName='active' to="signup"><b className="Buttontext">register</b></NavLink></Button>
                                </ButtonGroup>
                            </Box>
                        </li>
                    </ul>
                </div> */}


            </nav>
        </>
    );
};

export default NavBar;