const categoryBaseUrl = '/api/member';

export const editInfoById = async (id,data) => {
    return await useHttp.put(`/auth/member/${id}`,data);
};

export const getInfoById = async (id) => {
    return await useHttp.get(`${categoryBaseUrl}/${id}`);
};

export const getAll = async () => {
    return await useHttp.get(`${categoryBaseUrl}`);
};