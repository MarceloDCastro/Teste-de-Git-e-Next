
import axios from 'axios';
import getConfig from 'next/config';

const baseUrl = `https://novoposdev.advicesystem.com.br/api`;
// const baseUrl = `https://localhost:7104/api`;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;',
    'Authorization': 'Bearer [token]'
  }
});

export const api = axiosInstance;