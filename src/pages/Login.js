import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";
import axios from "axios";
 

function Login() {
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();

    const sendEmail = async (e) => {
      //e.preventDefault();  
      const data = {
        email,
      };  

      const response = await axios.post(
        "http://localhost:8080/api/sendemail",
        data
      );
      console.log(response.data, "<<<-- Envío mail!!!!!");
    };


     
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
        console.log("Antes de sendEmail")
        sendEmail();
        console.log("Luego de sendEmail")
    }
    return (
        <Container>
            <Row>
                <Col md={6} className="login__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleLogin}>
                        <h1>Login to your account</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form.Group>

                        <p className="pt-3 text-center">
                            Don't have an account? <Link to="/signup">Create account</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>

            <h1>ss</h1>
            <div className="--flex-center --bg-primary --100vh">
                <div className="--width-500px --card --p --bg-light">
                    <form className="--form-control" onSubmit={sendEmail}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="--btn --btn-primary">
                        Send Email
                    </button>
                    </form>
                </div>
            </div>

        </Container>

        
    );
}

export default Login;
