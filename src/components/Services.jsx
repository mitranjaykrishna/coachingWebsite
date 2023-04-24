import { Button } from "@mui/material";
// import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";



const Services=() =>{

    const {services}=useGlobalContext();
    // console.log(services);
    // const [isReadMore, setReadMore]=useState(true);

    // const toggleOver=()=>{
    //     setReadMore(!isReadMore);
    // }
    



    return (
        <>
            <Wrapper className="section">
            <div className="containerInside">
                <h2 className="heading"> Our Affordable Courses <span className=" common-heading insideThought">With Best Class Faculty</span></h2>
                <p>We are proud to offer affordable and accessible courses to help you achieve your educational goals without breaking the bank. Our courses are not only high-quality and comprehensive, but they are also among the most competitively priced on the market.
                We understand that education can be expensive, which is why we have made it our mission to provide top-notch courses at the most affordable prices possible. With our courses, you won't have to sacrifice quality for affordability.
                </p>
            
            </div>
                <div className="container grid grid-two-column">
                    {
                        services.map((curElem) => {
                            const {id, title,price, img, description} =curElem;
                            return(
                                <div key={id} className="card">
                                    <figure>
                                        <img src={img} alt="" />
                                    </figure>
                                    <div className="card-data">
                                        <h3>{title}</h3>


                                        <p className="description">{description}</p>


                                        <Button className="btn">{price}</Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Wrapper>
        </>
    );

};

const Wrapper = styled.section`
    padding: 9rem 0 0;
    margin-top:10rem;
    background:rgba(128, 128, 128, 0.049);

    .containerInside{
    max-width: 120rem;
    margin: 0 auto;
    ${'' /* margin-top:10rem; */}
    }

    .heading {
      font-size: 6rem;
      font-weight: 700;
      margin-bottom: 6rem;
      text-transform: capitalize;
      color: rgb(44, 182, 120);
    }
    .insideThought{
        display:flex;
        justify-content: center;
        font-weight:500;
        font-size:3rem;
    }

    .card{
        border: 0.1rem solid rgb(170 170 170/40%);
        background-color: ${({theme})=> theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        ${'' /* height:100%; */}
        transition: all 0.8s linear;

        &:hover{
            transform: scale(1.1,1.1);
            &::after{
                content: "";
                position: absolute;
                top:0;
                left:0;
                width: 0%;
                height: 100%;
                background: rgba(44, 182, 120, 0.226);
                transition: all 0.8s linear;
                cursor: pointer;
                z-index:0;
            }

            &:hover::after{
                width:100%
            }

            &:hover img{
                transform: scale(1.5,1.5);
                ${'' /* box-shadow: 1px 1px 100px black; */}
            }
        }
        
        ${'' /* &:hover figure{
            &::after{
                content: "";
                position: absolute;
                top:0;
                left:0;
                width: 0%;
                height: 100%;
                background: rgba(44, 182, 120, 0.226);
                transition: all 0.4s linear;
                cursor: pointer;
                z-index:0;
            }

            &:hover::after{
                width:100%
            }
        } */}

        .card-data{
            padding: 0 2rem;
            ${'' /* height:15rem; */}

            
            ${'' /* &:hover{
            background:black;
            
            &:hover p{
                color:white;
            } */}
        }
            
        }
        
        h3{
            margin: 3rem 0;
            font-weight: 700;
            font-size: 3rem;
            color:  #1d73dc;
            z-index:100;
        }
        

        .description{
            text-align: justify;
            text-justify: inter-character;
        }

        .btn{
            margin: 2rem auto;
            background-color: rgb(0 0 0 /0%);
            border: 0.1rem solid  #1d73dc;
            display: flex;
            justify-content: center;
            align-items: center;
            color:  #1d73dc;
            font-size: 3rem;
            z-index:10;

            

            &:hover{
                background-color:  rgba(44, 182, 120, 0.226);
                
                ${'' /* color:  #1d73dc; */}
            }

            

        }
    

        figure{
            width: auto;
            display: flex;
            justify-content: center;
            align-items:center;
            position: relative;
            border-radius: 1rem;
            background: rgba(44, 182, 120, 0.226);
            ${'' /* overflow: hidden; */}
            ${'' /* transition: all 0.5s linear; */}
            
            
            ${'' /* .price{
                color: rgb(44, 182, 120);
            } */}

            
            

            ${'' /* &:hover img{
                transform: scale(1.1,1.1);
            } */}

            img{
                max-width: 90%;
                margin-top: 1.5rem;
                height: 15rem;
                transition: all 0.8s linear;
                z-index:1;
            }
        }
        a:link, a:visited{
        color:  #1d73dc;

        &:hover{
            color: #1d73dc;
        }
        
        }
        .read-or-hide{
        color: ${({theme})=> theme.colors.helper};
        cursor: pointer;
    }

`;

export default Services;