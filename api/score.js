const categoryBaseUrl = '/api/score';

export const addScore = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}`,data);
};

export const getScore = async () => {
    return await useHttp.get(`${categoryBaseUrl}`);
};

export const deleteScore = async (id) => {
    return await useHttp.delete(`${categoryBaseUrl}/${id}`);
};