import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const PersonaList = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/personas')
            .then(res => {
                setPersonas(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Lista de Personas</h2>
            <ul className="personas-list">
                {personas.map(persona => (
                    <li key={persona._id} className="personas-item">
                        <Link to={`/personas/${persona._id}`}>{persona.nombre} {persona.apellido}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonaList;
