import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";

function Login() {

    // Definición de los estados de usuario 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }
    return (
        <Container>
            <Row>
                <Col md={6} className="login__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleLogin}>
                        <h1>Registro de usuario</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form.Group>

                        <p className="pt-3 text-center">
                            ¿No tienes cuenta? <Link to="/signup">Crear cuenta</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Login;
