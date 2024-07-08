import axios from 'axios';

const API_URL = 'http://localhost:5000';

const getAll = () => {
    return axios.get(`${API_URL}/personas`);
};

const get = id => {
    return axios.get(`${API_URL}/personas/${id}`);
};


const create = async (data) => {
    try {
        console.log('Datos enviados al servidor:', data);
        const response = await axios.post(`${API_URL}/personas`, data);
        return response.data;
    } catch (error) {
        console.error('Error creando persona:', error.response?.data);
        throw error.response?.data || error;
    }
};

const update = (id, data) => {
    console.log('Actualizando persona con ID:', id);
    return axios.put(`${API_URL}/personas/${id}`, data);
};

const remove = id => {
    return axios.delete(`${API_URL}/personas/${id}`);
};

const checkEmailExists = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/personas/check-email/${email}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al verificar el correo electrónico');
    }
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    checkEmailExists
};
