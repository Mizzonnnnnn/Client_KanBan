import handleAPI from "../apis/handleAPI";

export const loginBasic = async (data: any) => {
    return await handleAPI('/auth/login', data, 'post');
}

export const registerUser = async (data: any) => {
    return await handleAPI('/auth/register', data, 'post');
}

export const googleLoginService = async (data: any) => {
    return await handleAPI('/auth/google-login', data, 'post');
}