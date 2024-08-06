import { del, get, put, post } from "../utils/request";

export const addUser = async (formData) => {
    try {
        const result = await post('create-user', formData);
        return result;
    } catch (error) {
        // console.error('Add user error:', error);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const result = await get('getAllUsers');
        return result;
    } catch (error) {
        // console.error('Get all users error:', error);
        throw error;
    }
};

export const uploadAvatar = async (file, userId) => {
    const formData = new FormData();
    formData.append('avatar', file); // Đảm bảo bạn đính kèm file vào FormData

    try {
        const result = await post(`${userId}/uploadAvatar`, { body: formData, useFormData: true });
        return result;
    } catch (error) {
        // console.error('Upload avatar error:', error);
        throw error;
    }
};


export const updateUser = async (id, user) => {
    try {
        const result = await put(`update-user/${id}`, user);
        return result;
    } catch (error) {
        // console.error('Update user error:', error);
        throw error;
    }
}
export const deleteUser = async (id) => {
    try {
        const result = await del(`delete-user/${id}`);
        return result;
    } catch (error) {
        // console.error('Delete user error:', error);
        throw error;
    }
}
