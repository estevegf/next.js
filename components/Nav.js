import Link from 'next/link';
import React from "react";

const Nav = () => (
    <nav className={"fixed-top container"}>
        <div>
            <Link href="/">
                <a className={"nav-logo"}>
                    <img src="/static/esteve-logo.svg" height="40" alt="esteve_logo"/>
                </a>
            </Link>
        </div>
        <ul>
            <li>
                <Link href="/education"><a className={"link-hover"}>EDUCATION</a></Link>
            </li>
        </ul>

        <style jsx>{`
            nav {
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                padding: 0 1em;
                background: white;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
            }
           
            .fixed-top {
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 10;
            }
            
            .nav-logo {
                display: inline-block;
                margin-right: 1em;
            }
             
            ul {
                display: flex;
                width: auto;
                margin-left: auto;
                list-style: none;
            }
            
            li {
                margin: 0 1em;
            }
            
            li a {
                color: black;
                text-decoration: none;
            }
            
            .link-hover:hover {
                color: gray;
            }
        `}</style>
    </nav>
);

export default Nav;
