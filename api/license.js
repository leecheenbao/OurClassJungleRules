const baseUrl = 'http://wasupstudionobullying.com/wasupstudio/api/license'

export const getAll = async () => {
    return await useHttp.get(`${baseUrl}`);
};

export const add = async (data) => {
    return await useHttp.post(`${baseUrl}`,data);
};

export const edit = async (id,data) => {
    return await useHttp.put(`${baseUrl}/${id}`,data);
};