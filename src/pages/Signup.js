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
 
                    <Form style={{ width: "70%" }} onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="mt-5">Crear una cuenta</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label className="mt-1 texto">Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingrese su nombre completo"
                                maxlength="30"
                                {...register("nombre", {  required: {value: true, 
                                    message: "El nombre es requerido"}, 
                                    minLength: {value: 2,
                                                message: "El nombre debe tener al menos 2 caracteres"},
                                    maxLength: {value: 30,
                                                message: "El nombre debe tener como máximo 30 caracteres"},            
                                    pattern:{value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i ,
                                            message: "El formato del nombre no es correcto. No incluir numeros ni caracteres especiales."} 
                                }) }
                                
                                value={name} required onChange={(e) => setName(e.target.value)} />
                                {/* {errors.nombre && <span>{errors.nombre.message}</span>} */}
                                <div className="text-danger" >{errors.nombre?.message}</div>    

                        </Form.Group>

                        <Form.Group className="mb-3 mt-3 texto">
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                maxlength="90"
                                {...register("email", { required: {value: true, 
                                    message: "El email es requerido"}, 
                                    pattern:{value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i ,
                                    message: "El formato del email no es correcto"} 
                                                        }) }
                                value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <div className="text-danger" >{errors.email?.message}</div>  
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3 texto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Ingrese su contraseña" 
                            maxlength="16"
                            {...register("password", { required: {value: true, 
                                message: "La contraseña es requerida"}, 
                                minLength: {value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres"},
                                maxLength: {value: 64,
                                            message: "La contraseña debe tener como máximo 64 caracteres"},            
                                pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,16}/i ,
                                        message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y entre 8 y 16 caracteres."}            
                                })}
                            value={password} required onChange={(e) => setPassword(e.target.value)} />
                            <div className="text-danger" >{errors.password?.message}</div>
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3 texto">
                            <Form.Label>Confirme el Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Reingrese su contraseña" 
                            maxlength="16"
                            {...register("confirmPassword", { required: {value: true, 
                                message: "La confirmación de la contraseña es requerida"}, 
                                minLength: {value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres"},
                                maxLength: {value: 64,
                                                message: "La contraseña debe tener como máximo 64 caracteres"},            
                                pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,16}/i ,
                                            message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y entre 8 y 16 caracteres."}            
                                })} 
                            value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} />
                            <div className="text-danger" >{errors.confirmPassword?.message}</div>  
 

                        </Form.Group>

                        <Form.Group className="mb-3 mt-2">
                            <Button className="texto" type="submit" disabled={isLoading}>
                                Crear cuenta
                            </Button>
                        </Form.Group>
 
                        <p className="pt-3 text-center texto">
                            ¿Ya tiene una cuenta? <Link to="/login">Login</Link>{" "}
                        </p>                        

                    </Form>
                </Col>
                <Col md={6} className="signup__image--container mt-4 mb-4"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
