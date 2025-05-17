import axios from 'axios';
import type { User } from '../context/AuthContext'

const API_URL = "http://localhost:4000"

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

//login User
export const loginUser = async (
    username: string,
    password: string
): Promise<User | null> => {
    try {
        const response = await axios.get<User[]>(`${API_URL}/users`, {
            params: { username, password },
        });
        return response.data[0] || null;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
        return null;
    }
};

// Fetch all products
export const fetchProducts = async (): Promise<Product[] | null> => {
    try {
        const response = await axios.get<Product[]>(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

//delete product
export const deleteProduct = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}