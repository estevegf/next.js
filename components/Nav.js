import Link from 'next/link';
import React from "react";

const Nav = () => (
    <div>
        <ul>
            <li>
                <Link href="/"><a>HOME</a></Link>
            </li>
            <li>
                <Link href="/education"><a>EDUCATION</a></Link>
            </li>
        </ul>

        <style jsx>{`
            ul {
                background: #333;
            }
            
            ul a {
                color: white;
            }
        `}</style>
    </div>
);

export default Nav;
