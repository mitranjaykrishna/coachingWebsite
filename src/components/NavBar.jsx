import React from "react";

import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import "../styles/NavBar.css"



const NavBar=() =>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <NavLink to="/"><img src={"./images/logo.png"} alt="Logo" /> </NavLink>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/' >           Home     </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/services' >    Services </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/about'  >      About    </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/contact' >     Contact  </NavLink></Button></li>
                    </ul>  
                </div>
                <div className="affiliated">
                    <ul >
                        <li>
                            <Box>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" className="affiButtonG buttonEffect">
                                    {/* <Button><a href="https://access.vipseotools.com/login"><b>Login</b></a></Button> */}
                                    <Button variant="contained"><NavLink exact activeClassName='active' to="/login"><b className="Buttontext">Login</b></NavLink></Button>
                                    {/* <Button><a href="https://access.vipseotools.com/signup"><b>register</b></a></Button>  */}
                                    <Button variant="contained"><NavLink exact activeClassName='active' to="signup"><b className="Buttontext">register</b></NavLink></Button>
                                    {/* <Button variant="contained" ><a href="https://access.vipseotools.com/aff/signup/" ><b className="join">Join Affiliate</b></a></Button>*/}
                                </ButtonGroup>
                            </Box>
                        </li>
                    </ul>
                </div>


            </nav>
        </>
    );
};

export default NavBar;