import React from 'react'
import logo from "./logo.svg";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Navbarsection = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo"/><span>App</span><FontAwesomeIcon  className="dotIcon" icon={faCircle}></FontAwesomeIcon></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                             </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                             </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                             </li>

                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="sign-btn-button" type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbarsection