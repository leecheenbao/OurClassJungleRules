const categoryBaseUrl = '/auth';

export const signup = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/signup`,data);
};

export const sendVerificationLetter = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/mail`,data);
};

export const googleRegister = async () => {
    return await useHttp.get(`${categoryBaseUrl}/google-signup`)
};