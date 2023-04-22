import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";


const Contact=() =>{

    const Wrapper=styled.section`
        padding: 9rem 0 5rem 0;

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
    return (
        <Wrapper >
            <h2 className="common-heading"> Feel Free to Contact US</h2>

            <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.810693053927!2d81.00907655041941!3d26.873244686593118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2901630467d%3A0x9375b04ab09c507b!2sHelmets!5e0!3m2!1sen!2sin!4v1677186714014!5m2!1sen!2sin"
             width="100%"
              height="250" 
              style={{border:0}}
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">

            </iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mzbqrwve" method="POST" className="contact-inputs">
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

export default Contact;