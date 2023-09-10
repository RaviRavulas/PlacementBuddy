import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
    return (
        <footer style={{backgroundColor:"rgb(19, 27, 37)",color:"white"}}>
            <Container className="text-center p-3">
                <p>&copy; {new Date().getFullYear()} Placement Buddy</p>
                <p>@RaviRavulas</p>
            </Container>
        </footer>
    );
}
export default Footer;