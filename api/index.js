const categoryBaseUrl = '/auth';

export const googleRegister = async () => {
    return useFetch().get(`${categoryBaseUrl}/google-signup`);
};

export const authSignup = async () => {
    return useHttp.post(`${categoryBaseUrl}/signup`, {
        "email": "123@gmail.com",
        "pwd": "12345",
        "name": "John Doe",
        "phone": "1234567890",
        "birthday": "2000-01-01 00:00:00",
        "organization": "ACME Inc.",
        "grade": 95,
        "role": "1"
    });
};


// {
//     "email":"123@gmail.com",
//     "password":"12345",
//     "role": "ROLE_USER"
// }
export const authLogin = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/login`, data)
};


