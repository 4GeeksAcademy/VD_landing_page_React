// donde esta el react entre comillas??

//paso 1
import React from "react";

//paso 2
function Navbar() {
    //el return va con parentesis, no corren las llaves...
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 ps-4 text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse me-3" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Service</a>
                        </li>
                        <li className="nav-item me-5 pe-2">
                            <a className="nav-link enabled text-white-50">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

//paso 3

export default Navbar;