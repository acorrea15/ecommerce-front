import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
    
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    const onSubmit = (data) => {
        console.log(data, "<-----data");  
        handleSignup()
    }

        
     function handleSignup(e) { 
        //e.preventDefault();   

        if(password === confirmPassword)
        {
            signup({ name, email, password });           
        }
        else
        {
            Swal.fire({
                icon: "error",
                title: "Las contraseñas no coinciden",
                text: "Error de confirmación de contraseñas. Verifique las contraseñas ingresadas.",
                });
                console.log(password, confirmPassword, "<<--Contraseñas")
        }

    }
    
        

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <h1>Create an account</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Your name"
                                {...register("nombre", {  required: {value: true, 
                                    message: "El nombre es requerido"}, 
                                    minLength: {value: 2,
                                                message: "El nombre debe tener al menos 2 caracteres"},
                                    maxLength: {value: 30,
                                                message: "El nombre debe tener como máximo 30 caracteres"},            
                                    pattern:{value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i ,
                                            message: "El formato del nombre no es correcto"} 
                                }) }
                                
                                value={name} required onChange={(e) => setName(e.target.value)} />
                                {/* {errors.nombre && <span>{errors.nombre.message}</span>} */}
                                <div className="text-danger" >{errors.nombre?.message}</div>    

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                {...register("email", { required: {value: true, 
                                    message: "El email es requerido"}, 
                                    pattern:{value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i ,
                                    message: "El formato del email no es correcto"} 
                                                        }) }
                                value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <div className="text-danger" >{errors.email?.message}</div>  
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            {...register("password", { required: {value: true, 
                                message: "La contraseña es requerida"}, 
                                minLength: {value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres"},
                                maxLength: {value: 64,
                                            message: "La contraseña debe tener como máximo 64 caracteres"},            
                                pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i ,
                                        message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."}            
                                })}
                            value={password} required onChange={(e) => setPassword(e.target.value)} />
                            <div className="text-danger" >{errors.password?.message}</div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirme el Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Re-Enter Password" 
                            {...register("confirmPassword", { required: {value: true, 
                                message: "La confirmación de la contraseña es requerida"}, 
                                minLength: {value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres"},
                                maxLength: {value: 64,
                                                message: "La contraseña debe tener como máximo 64 caracteres"},            
                                pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i ,
                                            message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."}            
                                })} 
                            value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} />
                            <div className="text-danger" >{errors.confirmPassword?.message}</div>  
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Create account
                            </Button>
                        </Form.Group>
                        <p className="pt-3 text-center">
                            ¿Ya tiene una cuenta? <Link to="/login">Login</Link>{" "}
                        </p>
                        <p className="pt-3 text-center">
                            ¿Olvidó su contraseña? <Link to="/restore">Restaurar contraseña</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
