import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

const PersonaActions = ({ id, onEliminarPersona }) => {
    const navigate = useNavigate();

    const handleEliminarClick = async () => {
        const confirmar = await Swal.fire({
            icon: 'warning',
            title: '¿Está seguro?',
            text: '¿Está seguro que quiere eliminar esta persona?',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmar.isConfirmed) {
            try {
                await onEliminarPersona(id);
                await Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'Persona borrada correctamente'
                });
                navigate('/personas'); // Redirige a PersonaList después de eliminar
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al eliminar la persona'
                });
            }
        }
    };

    const handleEditarClick = () => {
        Swal.fire({
            icon: 'question',
            title: `¿Estás seguro de editar esta persona?`,
            showCancelButton: true,
            confirmButtonText: 'Sí, editar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/personas/${id}/editar`);
            }
        });
    };

    return (
        <ButtonGroup className="mt-2"> 
            <Button variant="primary" onClick={handleEditarClick}>
                Editar Persona
            </Button>
            <Button variant="danger" onClick={handleEliminarClick} className="ms-2"> 
                Eliminar Persona
            </Button>
        </ButtonGroup>
    );
};


export default PersonaActions;
