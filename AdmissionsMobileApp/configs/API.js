import axios from "axios";

const HOST = 'https://phuonglinh.pythonanywhere.com'

export const endpoints = {
    'informationsections': `/informationsection/`,
    'informationsection': (sectionId) => `/informationsection/${sectionId}/information/`,
    'information': `/information/`,
    'information-details': (informationId) => `/information/${informationId}/`,
    'banners': '/banners/',
    'faculty': '/faculties/',
    'facultyDetails': (facultyId) => `/faculties/${facultyId}/`,
    'login': '/o/token/',
    // 'users': '/users/'
    'users': (userId) => `/users/${userId}/`,
    'university': '/university/',
    'livestream': '/livestream/',
    'livestream-details': (livestreamId) => `/livestream/${livestreamId}/`,
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