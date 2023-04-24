import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";


const Contact=() =>{

    
    return (
        <Wrapper>
            <h2 className="common-heading"> Feel Free to Contact US</h2>

            <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.232558195384!2d82.13884191744383!3d26.768855899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a061d0c8a540d%3A0x22fcdf8658f60140!2sSaraswati%20Classes!5e0!3m2!1sen!2sin!4v1682266605921!5m2!1sen!2sin"
             width="100%" 
             height="450" 
             style={{border:0}}
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
             </iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="/" method="POST" className="contact-inputs">
                        <input 
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input 
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        /> 

                        <textarea 
                            name="message"
                            cols='30'
                            rows='6'
                            autoComplete="off"
                            required
                        >                        
                        </textarea>  

                        <Button className="btn logReg" type="submit" variant="contained">Submit</Button>                  
                    </form>
                </div>

            </div>

        </Wrapper>
    );

};

const Wrapper=styled.section`
        padding: 9rem 0 5rem 0;
        margin-top:10rem;


        .container{
            margin-top: 6rem;
            text-align: center;
            background-color: ${({theme})=> theme.colors.bg};
            border-radius: 1rem;
            box-shadow: ${({theme}) => theme.colors.shadowSupport};

            .contact-form{
                max-width:50rem;
                margin: auto;
                align:center
            }
            .contact-inputs{
                display: flex;
                flex-direction: column;
                gap: 3rem;
                
                
            }

            .btn{
                max-width: 100%;
            }

            .logReg{
                
                font-size: 1.5rem;
            }

            button:hover{
            text-decoration: underline;
            transform: scale(0.96);
            transition: 0.3s ease-in-out;
            }

            
            
        }
    `;

export default Contact;