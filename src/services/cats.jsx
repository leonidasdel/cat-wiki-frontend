import api from '../utils/api';

export const getAllBreeds = async () => {
    const response = await api.get(`breeds/`);
    return response.data;
};

export const searchBreed = async (breed) => {
    const response = await api.get(`breeds/search/${breed}`);
    return response.data;
};
