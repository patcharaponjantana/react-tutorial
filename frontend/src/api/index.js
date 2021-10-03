import axios from 'axios';

const API_URL = 'http://localhost:8000';
const headers = { 'Content-Type': 'application/json' };

const getMenuProduct = () => axios.get(`${API_URL}/menu-product`, { headers });
const getProductDetail = (id) => axios.get(`${API_URL}/product/${id}`, { headers });

const getMenuCareer = () => axios.get(`${API_URL}/menu-career`, { headers });
const getCareerDetail = (id) => axios.get(`${API_URL}/career/${id}`, { headers });

export { 
    getMenuProduct,
    getProductDetail,
    getMenuCareer,
    getCareerDetail
};
