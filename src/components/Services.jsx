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
                <h2 className="heading"> Our Affordable Courses <span className=" common-heading insideThought">With Best Class Faculty</span></h2>
                <div className="container grid grid-two-column">
                    {
                        services.map((curElem) => {
                            const {id, title, price, description} =curElem;
                            return(
                                <div key={id} className="card">
                                    <figure>
                                        <h1 className="price">{price}</h1>
                                    </figure>
                                    <div className="card-data">
                                        <h3>{title}</h3>


                                        <p className="description">{description}</p>


                                        <Button className="btn"><a href="/" >Subscribe</a></Button>
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
    .container{
        max-width: 120rem;

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
        

        .card-data{
            padding: 0 2rem;
            
        }
        
        h3{
            margin: 3rem 0;
            font-weight: 700;
            font-size: 3rem;
            color:  #1d73dc;
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
            font-size: 1.4rem;

            &:hover{
                background-color:  rgba(44, 182, 120, 0.226);
                ${'' /* color:  #1d73dc; */}
            }

            

        }
    }

    figure{
        width: auto;
        display: flex;
        justify-content: center;
        align-items:center;
        position: relative;
        ${'' /* overflow: hidden; */}
        transition: all 0.5s linear;
        
        
        .price{
            color: rgb(44, 182, 120);
        }

        &::after{
            content: "";
            position: absolute;
            top:0;
            left:0;
            width: 0%;
            height: 100%;
            background: rgba(44, 182, 120, 0.226);
            transition: all 0.2s linear;
            cursor: pointer;
        }

        &:hover::after{
            width:100%
        }
        

        &:hover img{
            transform: scale(1,2);
        }

        img{
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
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