import axios from 'axios';

const baseUrl = 'http://wasupstudionobullying.com/wasupstudio'

export const googleRegister = async () => {
    return axios.get(`${baseUrl}/auth/google-signup`);
};

export const authSignup = async () => {
    return axios.post(`${baseUrl}/auth/signup`,{
        "email": "123@gmail.com",
        "pwd": "12345",
        "name": "John Doe",
        "phone": "1234567890",
        "birthday": "2000-01-01 00:00:00",
        "organization": "ACME Inc.",
        "grade": 95,
        "role":"1"
      });
};
