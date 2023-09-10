import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";


const Register = () => {
    const [user, setUser] = useState({ username: "", password: ""});
    const { username, password } = user;    
    const Register = async (e) => { 
        e.preventDefault();
        alert("Registered Successfully");   
        window.location.href = "/admin";
    }
    return (
        <>
            <NavBar />
            <Container style={{ minHeight: "80vh" }}>
                <Row className="shadow mt-3">
                    <Col>
                        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", backgroundColor: "rgb(124, 148, 167)" }} className="text-center mt-3">Register</h1>
                        <Container className="adminbox">
                            <Form>
                                <Form.Group className='my-3' controlId="username">
                                    <Form.Label><b>Username</b></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className='my-3' controlId="password">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control

                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={Register}>
                                    Register
                                </Button>
                            </Form>
                        </Container>
                        <hr />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
export default Register;
