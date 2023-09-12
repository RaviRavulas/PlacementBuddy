import React, { useState } from 'react';
import { Form, Button, Nav, Container } from 'react-bootstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [batch, setBatch] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your submission logic here
    setMessage("Sending...")
    axios.post("https://formspree.io/f/xjvqovzb", {name, email, batch, feedback})
    .then(() => {
      setMessage("Message sent!") 
      setName('');
      setEmail('');
      setBatch('');
      setFeedback('');
    })
    .catch(() => {
      setMessage("There was an error!")
    })
    // Reset form fields
  };

  return (
    <>
    <NavBar />  
    
    <Container style={{background:"rgb(245, 247, 248)"}} className='shadow mb-5 mt-4'>
    <h1 style={{background:"rgb(124, 148, 167)"}} className='text-center my-3'>Contact Us</h1>
      <Container className='text-center p-2 mb-3 mt-2'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='my-3' controlId="name">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='my-3' controlId="email">
            <Form.Label><b>Email</b></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='my-3' controlId="batch">
            <Form.Label><b>Batch</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='my-3' controlId="feedback">
            <Form.Label><b>Feedback</b></Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
          <Container>
          <Button  variant="primary" type="submit">
            Submit
          </Button>
          </Container>
          <Form.Text>
            {message}
          </Form.Text>
        </Form>
      </Container>
    </Container>
    <Footer />
    </>
  );
};
export default ContactForm;
