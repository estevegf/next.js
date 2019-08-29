import React from "react";
import Nav from "./Nav";

const Layout = (props) => (
    <div>
        <header>
            <Nav/>
        </header>
        {props.children}
        <style global jsx>{`
            body {
                margin:0;
                font-family: 'Montserrat', sans-serif;
            }
            
            .bar-margin {
                margin-top: 50px;
            }
            
            .container {
              padding: 0 1em;
              font-size: small;
            }
            
            @media (min-width: 600px) {
               .container {
                   padding: 0 4em!important;
                   font-size: medium;
               }
            }
            
            @media (min-width: 800px) {
                .container {
                    padding: 0 8em!important;
                }
            }
            
            @media (min-width: 1300px) {
                .container {
                    padding: 0 14em!important;
                    font-size: large;
                }
            }
            
            @media (min-width: 1200px) {
                .l-6 {
                    width: 50%!important;
                }
            }
            
            @media (min-width: 501px) {
              .s-6 {
                width: 50%!important;
              }
            }
            
            .responsive {
              width: 100%;
              height: auto;
            }
            
            .center {
              text-align: center;
            }
        `}</style>
    </div>
);

export default Layout;
