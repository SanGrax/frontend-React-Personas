import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PersonaList from './PersonaList';
import PersonaForm from './PersonaForm';
import PersonaDetail from './PersonaDetail';
import personaService from '../services/personaService';
import Home from './Home';
import Swal from 'sweetalert2';

const MainRoutes = () => {
    const navigate = useNavigate();

    const handleCreate = async (persona) => {
        try {
            console.log('Creating persona with data:', persona); // Punto de depuración
            await personaService.create(persona);
            Swal.fire({
                icon: 'success',
                title: 'Persona creada',
                text: `${persona.nombre} se agrego correctamente.`
            });
            navigate('/personas');
        } catch (error) {
            console.error('Error creando persona:', error);
            throw error;
        }
    };


    const handleUpdate = async (persona) => {
        try {
            await personaService.update(persona._id, persona);
            Swal.fire({
                icon: 'success',
                title: 'Persona actualizada',
                text: `${persona.nombre} ha sido actualizado correctamente.`,
            }).then(() => {
                navigate('/personas');
            });
        } catch (error) {
            console.error('Error actualizando persona:', error);
        }
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Añade la ruta Home */}
            <Route path="/personas" element={<PersonaList />} />
            <Route path="/personas/crear" element={<PersonaForm onSubmit={handleCreate} />} />
            <Route path="/personas/:id" element={<PersonaDetail />} />
            <Route path="/personas/:id/editar" element={<PersonaForm onSubmit={handleUpdate} />} />
        </Routes>
    );
};

export default MainRoutes;
