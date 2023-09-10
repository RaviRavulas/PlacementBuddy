import { Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../services/helper";
const Admin = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [response, setResponse] = useState("")

    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/users/login`, user);
            Cookies.set("token", res.data.accessToken);
            setResponse("Logged in successfully!")
            navigate("/adminpage")
        } catch (err) {
            setResponse(err.response.data.message)
        }
    }

    const validateAuth = async () => {
        const token = Cookies.get("token")
        try {
            const validate = await axios.get(`${BASE_URL}/api/users/currentuser`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            navigate("/adminpage")
        } catch (err) {
            setResponse("Session expired!")
        }
    }

    useEffect(() => {
        validateAuth()
    }, [])

    return (
        <>
            <NavBar />
            <Container style={{ minHeight: "80vh" }}>
                <Row className="shadow mt-3">
                    <Col>
                        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", backgroundColor: "rgb(124, 148, 167)" }} className="text-center mt-3">Admin Login</h1>
                        <Container className="adminbox">
                            <Form>  
                                <Form.Group className='my-3' controlId="username">
                                    <Form.Label><b>Username</b></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your username"
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className='my-3' controlId="password">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={Login}>
                                    Login
                                </Button><br/>
                                <Form.Text className="mt-3">{response}</Form.Text>
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
export default Admin;