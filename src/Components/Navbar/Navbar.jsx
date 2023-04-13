import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="n-wrapper">
            {/* left */}
            <div className="n-left">
                <div className="n-name">GetRemote</div>
                <span></span>
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Services
                        </li>

                        <li>
                            Contact
                        </li>
                    </ul>
                </div>

                <button className="button">Contact</button>

            </div>
        </div>
    );
};

export default Navbar;