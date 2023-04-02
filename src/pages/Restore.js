import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();


function Restore() {
 
    const [email, setEmail] = useState("");

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
    
    const onSubmit = (data) => {
        console.log(data, "<-----data");  
        handleRestore()
    }

        
     function handleRestore(e) { 
        //e.preventDefault();   
        
        sendEmail();    
        
         

    }

    const sendEmail = async (e) => {
        //e.preventDefault();
    
        const data = {
          email,
        };
    
        const response = await axios.post(          
          /* "http://localhost:8080/forgot-password",  */
          "https://ecommerce-back-production.up.railway.app/forgot-password",
          data
        );
        console.log(response.data, "<<----- sendEmail!!!!!forgot-password!!!!!!");
        console.log(response.data.status, "<<<<----ES response.data.status!!!!!!!!!");

        if (response.data.status == "El usuario no existe!!"){
            alert("El usuario no existe! Verifique el email ingresado.")
        }
        else{
            alert("Se envió un mail a la casilla indicada para continuar con el proceso de restauración de la contraseña.")    
            window.location.href = "http://localhost:3000/login";
        }
      };
    
        

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <h1>Restaurar contraseña</h1>
                        
                        <Form.Group>
                            <Form.Label className="texto">Dirección de mail</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese el email con el que se registró" 
                                maxlength="30"
                                {...register("email", { required: {value: true, 
                                    message: "El email es requerido"}, 
                                    pattern:{value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i ,
                                    message: "El formato del email no es correcto"} 
                                                        }) }
                                value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <div className="text-danger" >{errors.email?.message}</div>  
                        </Form.Group>

                       {  <Form.Group>
                            <Button className="mt-4 texto"   type="submit"  >
                                Restaurar
                            </Button>
                        </Form.Group> }
                        <p className="pt-3 text-center texto">
                            ¿Ya tiene una cuenta? <Link to="/login">Login</Link>{" "}
                        </p>
                         
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container2"></Col>
            </Row>
        </Container>
    );
}

export default Restore;
