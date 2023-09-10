import React from 'react';
import NavBar from '../components/NavBar';
import {Container,Row,Col} from 'react-bootstrap';
import Footer from '../components/Footer';

const About=()=>{
    return(
        <>
        <NavBar />
        <Container style={{minHeight:"80vh"}}>
            <Row className="shadow mt-3">
                <Col>
                    <h1 style={{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundColor:"rgb(124, 148, 167)"}} className="text-center mt-3">About Us</h1>  
                    <p className="aboutmatter">

Welcome to the heart of Placement Buddy! We're a passionate team of developers and enthusiasts dedicated to bringing you a reliable and user-friendly platform for exploring placement information. Here's a bit about who we are and what drives us:

<br/><b>Our Mission<br/> </b>

At Placement Buddy, our mission is to empower students, job seekers, and curious minds with access to accurate and up-to-date placement data. We believe that informed decisions are the stepping stones to successful careers, and we're here to make that journey smoother for you.

<br/><b>Why We Started<br/> </b>

The idea for Placement Buddy was born out of our own experiences navigating the world of placements and job opportunities. We understood the importance of having reliable information at hand to make well-informed choices. This realization led us to create a platform that simplifies the process of accessing placement details and understanding company trends.

<br/><b>What Sets Us Apart<br/> </b>

What sets us apart is our commitment to quality and simplicity. We're not just another data source; we're your friendly placement companion. We focus on delivering accurate and relevant information in an engaging format. Our user-friendly interface ensures that you can effortlessly find the information you need without any hassle.

<br/><b>Get in Touch<br/> </b>

Have questions, suggestions, or just want to say hello? We'd love to hear from you! Feel free to reach out to us through our contact page, and we'll be more than happy to connect.

<br/><br/>Thank you for choosing Placement Buddy as your go-to placement information hub. We're excited to be part of your journey toward success and knowledge!

Remember, at Placement Buddy, we're not just providing data – we're providing opportunities.</p>
                    <hr/>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}
export default About;   