import React from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const HeroSection=() =>
{

    const {heroTopData,heading,heading1,heroPara,groupButton1,link1,groupButton2,link2,pageImage}=useGlobalContext();
    // console.log(link1);

    return (
        <>
            <Wrapper>
                {/* <div className="slide-section">
                     <img src="./images/banner/banner1.jpg" alt=""></img>
                </div> */}


                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="hero-top-data"><b>{heroTopData}</b></p>
                        <h1 className="hero-heading">
                           {heading}
                           <span className="insideThought">{heading1}</span>
                        </h1>
                        
                        <p className="hero-para fluidAnimPara">{heroPara}</p>
                        <Box>
                            <ButtonGroup variant="outlined" aria-label="outlined button group" className="buttonEffect">
                                <Button className="btn logReg "><NavLink exact activeClassName="active" to={link1}><b>{groupButton1}</b></NavLink></Button>
                                <Button className="btn logReg" variant="contained"><NavLink exact activeClassName='active' to={link2}><b className="button2">{groupButton2}</b></NavLink></Button>
                            </ButtonGroup>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <picture>
                        <img src={pageImage} alt="" className="hero-img fluidAnim" />
                    </picture>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper= styled.section `

    padding: 9rem 0 0;
    ${'' /* background: linear-gradient(0deg, #DC2C1D -170%, rgba(255, 255, 255, 0) 60%); */}
    ${'' /* margin-top:10rem; */}
    
    .slide-section{
        margin: 0 auto ;
        max-width: 130rem;
        height:40rem;
        padding:0;
    }
    .slide-section img{
        width:100%;
        height:40rem;
    }

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .hero-heading{
        font-size:9rem;
        ${'' /* height: 20rem; */}
        font-weight:700;
        background: linear-gradient(to right, red , #1d73dc, black);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
        width: 100%;
    }
    .insideThought{
        display:flex;
        justify-content: center;
        font-size:1.7rem;
    }

    .btn{
        max-width: 16rem;
    }

    .logReg{
        
        font-size: 1.5rem;
    }

    .buttonEffect :hover{
    ${'' /* color: #1d73dc; */}
    text-decoration: underline;
    transform: scale(0.96);
    transition: 0.3s ease-in-out;
    }


    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 3rem;
        color: ${({theme})=> theme.colors.helper};
    }

    .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-weight: 1000;
    text-align: justify;
    text-justify: inter-character;
    color: ${({theme})=> theme.colors.helper};
    }
    .button2{
            color: white;
        }

    .section-hero-image{
        display:flex;
        justify-content: center;
        ${'' /* max-width:60rem;         */}
    }

    picture {
        text-align: center;
        ${'' /* background:#DC2C1D; */}
        
    }
    picture img{
        height:43rem;
        width:50rem;
        border-radius:100%;
        ${'' /* box-shadow: 0px 0px 20px 1px  #f58634; */}
        ${'' /* background: #fdd1a2; */}
        
        
        

    }

    .hero-img {
        max-width: 80%;


    }

    .fluidAnim{
        animation: MoveUpDown 8s ease-in-out infinite alternate-reverse both;
    }
    .fluidAnimPara{
        animation: MoveLeftRight 8s ease-in-out infinite alternate-reverse both;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(30px);
        }
    }

    @keyframes MoveLeftRight {
        0%, 100% {
            transform: translateX(0);
        }
        50% {
            transform: translate(100px);
        }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
        gap: 7.2rem;
        }
    }



`;

export default HeroSection;