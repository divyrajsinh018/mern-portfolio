// const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// async function get(path) {
//   const res = await fetch(`${BASE_URL}${path}`)
//   if (!res.ok) throw new Error(`GET ${path} failed`)
//   return res.json()
// }

// async function post(path, body) {
//   const res = await fetch(`${BASE_URL}${path}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body)
//   })
//   if (!res.ok) throw new Error((await res.json()).message || `POST ${path} failed`)
//   return res.json()
// }

// export const api = {
//   listProjects: (params = {}) => {
//     const qs = new URLSearchParams(params).toString()
//     return get(`/api/projects${qs ? `?${qs}` : ''}`)
//   },
//   getProject: (slug) => get(`/api/projects/${slug}`),
//   sendMessage: (payload) => post('/api/contact', payload),
// }

// src/services/api.js

// src/services/api.js
import axios from "axios";

// Must use import.meta.env for Vite environment variables
const API_URL = import.meta.env.VITE_API_URL; // NOT VITE_API_URL directly

export const api = {
  sendMessage: async (data) => {
    try {
      const res = await axios.post(`${API_URL}/contact`, data);
      return { success: true, data: res.data };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || "Something went wrong. Please try again.",
      };
    }
  },
};
