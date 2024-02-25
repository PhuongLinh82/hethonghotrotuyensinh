import axios from "axios";

const HOST = 'https://phuonglinh.pythonanywhere.com'

export const endpoints = {
    'informationsections': `/informationsection/`,
    'informationsection': id => `/informationsection/${id}/information/`,
    // 'information': (informationSectionId) => `/informationsection/${informationSectionId}/information/`,
    'information': `/information/`,
    'information-details': (informationId) => `/information/${informationId}/`, //2 cai nay giong nhau ma
    'banners': '/banners/',
    'faculty': '/faculties/',
    'facultyDetails': (facultyId) => `/faculty/${facultyId}/`,
    'login': '/o/token/',
    // 'users': '/users/'
    'users': (userId) => `/users/${userId}/`,
    'university': '/university/'
}

export const authApi = (accessToken) => {
    return axios.create({
        baseURL: HOST,
        headers: {
            'Authorization': `bearer ${accessToken}`
        }
    })
}

export default axios.create({
    baseURL: HOST
})