const baseUrl = 'http://wasupstudionobullying.com/wasupstudio/api/task'

export const getAllTask = async () => {
    return await useHttp.get(`${baseUrl}`);
};

export const getMyTask = async () => {
    return await useHttp.get(`${baseUrl}/mytask`);
};

export const edit = async (id,data) => {
    return await useHttp.put(`${baseUrl}/${id}`,data);
};

export const add = async (data) => {
    return await useHttp.post(`${baseUrl}`,data);
};
