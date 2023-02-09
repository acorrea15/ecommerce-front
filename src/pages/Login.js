import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";
import css from "./Login.css"

function Login() {
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
                        <h1 className="textotitulo">Registro de usuario</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label className="texto">Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" value={email} maxlength="90" required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label className="texto">Password</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" value={password}  maxlength="16" required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form.Group>

                        <p className="pt-3 text-center texto">
                            ¿No tiene cuenta? <Link to="/signup">Crear cuenta</Link>{" "}
                        </p>
                        <p className="pt-3 text-center texto">
                            ¿Olvidó su contraseña? <Link to="/restore">Restaurar contraseña</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Login;
