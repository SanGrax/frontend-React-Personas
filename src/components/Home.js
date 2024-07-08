import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a MiApp</h1>
            <p>Esta es una aplicación estilo CRUD donde utilicé el siguiente stack de tecnologías:</p>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="Node.js" className="tech-logo" />
                </div>
                <div className="tech-item">
                    <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" className="tech-logo" />
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="tech-logo" />
                </div>
                <div className="tech-item">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="Bootstrap" className="tech-logo" />
                </div>
                <div className="tech-item">
                    <img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2" className="tech-logo" />
                </div>
            </div>

            <div className="container mt-4">
                <div className='list'>
                    <h3>Funcionalidad CRUD:</h3>
                    <ul>
                        <li>
                            <strong>Crear:</strong> Permite agregar nuevas personas con su nombre, apellido, edad y correo electrónico.
                        </li>
                        <li>
                            <strong>Leer:</strong> Muestra una lista de todas las personas registradas y permite ver detalles individuales de cada persona.
                        </li>
                        <li>
                            <strong>Actualizar:</strong> Permite editar la información de una persona existente.
                        </li>
                        <li>
                            <strong>Eliminar:</strong> Permite eliminar personas de la base de datos.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mt-4">
                <div className='list'>
                    <h3>Manejo de la App:</h3>
                    <ul>
                        <li>
                            Los usuarios pueden navegar entre las diferentes secciones usando la barra de navegación.
                        </li>
                        <li>
                            Cada operación CRUD se realiza de manera intuitiva y eficiente, proporcionando retroalimentación visual cuando se completan las acciones.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
