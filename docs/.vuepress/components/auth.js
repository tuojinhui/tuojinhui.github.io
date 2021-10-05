export const STORAGE_KEY = 'auth-token'

// Do user authorization verify
export function checkAuth () {
    const auth = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
    return auth && Object.keys(auth).length
}

export function addAuth (data) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function removeAuth () {
    window.sessionStorage.removeItem(STORAGE_KEY);
}

export default {
    checkAuth,
    addAuth,
    removeAuth
}