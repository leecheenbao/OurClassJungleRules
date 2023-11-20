export const order = async (data) => {
    return await useHttp.post(`/api/cash/order`,data);
};