const baseUrl = 'http://wasupstudionobullying.com/wasupstudio'
export const getScript = async () => {
    return await useHttp.get(`${baseUrl}/api/script`);
};
