import React from 'react'
import logo from "../logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../codent-500x100.png"
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-blue " style={{borderBottom:'2px solid black', fixed:"top"}} >
                <Navbar.Brand as={Link} to="/Home" class="align-self-center">
                    <img src={logo1} width="200" height="40" class="ps-2 d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <Nav className="ml-auto p-2">
                    <Link type="button" class="btn btn-dark" as={Link} to="/Register">
                        Register
                    </Link>
                </Nav>
            </nav>
        </div>
    )
}

export default Navigation;