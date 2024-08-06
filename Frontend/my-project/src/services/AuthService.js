import { post } from "../utils/request";
import { setCookie } from "../helpers/cookie";

export const login = async (phoneNumber, password) => {
    const payload = {
        phoneNumber: phoneNumber,
        password: password
    };
    
    try {
        const result = await post('login', payload);
        if(result.token){
            setCookie('token', result.token, 7);
        }
        return result;
    } catch (error) {
        console.error('Login error:', error);
        throw error; 
    }
};

// Hàm đăng ký
export const register = async (formData) => {
    try {
        const result = await post('register', formData);
        return result;
    } catch (error) {
        console.error('Register error:', error);
        throw error; 
    }
};
