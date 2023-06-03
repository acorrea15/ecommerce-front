import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Comision5icontact = () => {
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nombre completo: ${fullName}`);
    console.log(`Mensaje: ${message}`);
  };

  return (
    <div className="container d-flex flex-column min-vh-100 mt-5">
      <h1>Contacto</h1>
      <div className="flex-grow-1 d-flex justify-content-center">
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre y apellido"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese su mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Comision5icontact;






