const baseUrl = 'http://wasupstudionobullying.com/wasupstudio/api/member'

export const editInfoById = async (id,data) => {
    return await useHttp.put(`${baseUrl}/${id}`,data);
};

export const getInfoById = async (id) => {
    return await useHttp.get(`${baseUrl}/${id}`);
};

export const getAll = async () => {
    return await useHttp.get(`${baseUrl}`);
};