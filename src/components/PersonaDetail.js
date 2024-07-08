import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PersonaActions from './PersonaActions';
import '../css/PersonaDetail.css'

const PersonaDetail = () => {
    const { id } = useParams();
    const [persona, setPersona] = useState(null);


    const navigate = useNavigate()

    const handleEliminarPersona = async (id) => {
        try {
            // Envía una solicitud DELETE al backend para eliminar la persona con el ID proporcionado
            const response = await axios.delete(`http://localhost:5000/personas/${id}`);
            console.log('Persona eliminada:', response.data);

            // Mostrar un mensaje de éxito o redirigir al usuario a la lista de personas

            navigate('/personas'); // Redirige a PersonaList después de eliminar
        } catch (error) {
            console.error('Error al eliminar persona:', error);
            // Manejar errores aquí (mostrar mensaje al usuario, etc.)
            alert('Error al eliminar persona');
        }



    };


    useEffect(() => {
        axios.get(`http://localhost:5000/personas/${id}`)
            .then(res => {
                setPersona(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!persona) return <p>Cargando...</p>;

    return (
        <div className="persona-detail">
            <h2>{persona.nombre} {persona.apellido}</h2>
            <p><strong>Edad:</strong> {persona.edad}</p>
            <p><strong>Correo Electrónico:</strong> {persona.correoElectronico}</p>
            <PersonaActions id={id} onEliminarPersona={handleEliminarPersona} />
        </div>
    );
};

export default PersonaDetail;
