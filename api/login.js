const categoryBaseUrl = '/auth';

export const signup = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/signup`,data);
};