import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";

// Estados iniciales de los usuarios: 

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // dependiendo del estado del signupmutation nos da los siguientes estados: 
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    // función signup con los datos de la constante signup:
    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password });
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSignup}>
                        <h1>Crear cuenta</h1>
                        {/* Si sale error traemos el error con la estética boostrap */}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Tu nombre" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Crear cuenta
                            </Button>
                        </Form.Group>
                        <p className="pt-3 text-center">
                            ¿todavía no tenés cuenta? <Link to="/login">Crear cuenta</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
