const categoryBaseUrl = '/api/license';

export const getAll = async () => {
    return await useHttp.get(`${categoryBaseUrl}`);
};

export const add = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}`,data);
};

export const edit = async (id,data) => {
    return await useHttp.put(`${categoryBaseUrl}/${id}`,data);
};