const categoryBaseUrl = '/api/task';

export const getAllTask = async () => {
    return await useHttp.get(`${categoryBaseUrl}`);
};

export const getMyTask = async () => {
    return await useHttp.get(`${categoryBaseUrl}/mytask`);
};

export const edit = async (id,data) => {
    return await useHttp.put(`${categoryBaseUrl}/${id}`,data);
};

export const add = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}`,data);
};
