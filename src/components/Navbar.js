import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">MiApp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/personas/crear" className="nav-link">Agregar Persona</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/personas" className="nav-link">Lista de Personas</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;