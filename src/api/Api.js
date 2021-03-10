import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a32cf63b-7c81-47f7-9f45-73e722d1805a'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1) {
        return instance.get(`users?page=${currentPage}&count=10`).then(response => response.data)
    },
    getUserProfile(userId = 2) {
        console.warn("Obsolete method. Please use profileAPI object.");
        return profileAPI.getProfile(userId);
    },

    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data);
    },
    getCaptcha() {
       return instance.get('security/get-captcha-url').then(response => response.data);
    }
}












