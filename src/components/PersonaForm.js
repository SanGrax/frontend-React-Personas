import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import personaService from '../services/personaService';
import Swal from 'sweetalert2';

const PersonaForm = ({ onSubmit, initialValues }) => {
    const [persona, setPersona] = useState(initialValues || {});
    const { id } = useParams();
    const [emailError, setEmailError] = useState('');


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/personas/${id}`)
                .then(res => {
                    setPersona(res.data);
                })
                .catch(err => console.error(err));
        }
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setPersona(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Form submitted with data:', persona); // Punto de depuración
        try {
            await onSubmit(persona);
            console.log('Persona processed successfully'); // Punto de depuración
        } catch (error) {
            if (error.error && error.error.includes('duplicate key error collection') && error.error.includes('correoElectronico')) {
                setEmailError('El correo electrónico ya está en uso');
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El correo electrónico ya está en uso'
                });
            } else {
                setEmailError('Error al procesar persona');
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al procesar persona'
                });
            }
            console.error('Error al procesar persona:', error);
        }
    };

    return (

        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formNombre" className="mb-2">
                <Form.Control
                    type="text"
                    name="nombre"
                    value={persona.nombre || ''}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className="form-control-sm" // Clase para tamaño pequeño
                />
            </Form.Group>

            <Form.Group controlId="formApellido" className="mb-2">
                <Form.Control
                    type="text"
                    name="apellido"
                    value={persona.apellido || ''}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required
                    className="form-control-sm" // Clase para tamaño pequeño
                />
            </Form.Group>
            
            <Form.Group controlId="formEdad" className="mb-2">
                <Form.Control
                    type="number"
                    name="edad"
                    value={persona.edad || ''}
                    onChange={handleChange}
                    placeholder="Edad"
                    required
                    className="form-control-sm" // Clase para tamaño pequeño
                />
            </Form.Group>
            
            <Form.Group controlId="formCorreoElectronico" className="mb-2">
                <Form.Control
                    type="email"
                    name="correoElectronico"
                    value={persona.correoElectronico || ''}
                    onChange={handleChange}
                    placeholder="Correo Electrónico"
                    required
                    isInvalid={!!emailError}
                    className="form-control-sm" // Clase para tamaño pequeño
                />
                <Form.Control.Feedback type="invalid">
                    {emailError}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit">
                Guardar
            </Button>
        </Form>
    );
};

export default PersonaForm;
