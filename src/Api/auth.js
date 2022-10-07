import axios from 'axios'

const HTTP = axios.create({
    baseURL: `{process.env.VUE_APP_AUTHURL}`
})

HTTP.interceptors.request.use((config) => {
    if (getWithExpiry("userauth") !== null) {
        config.headers.Authorization = `Bearer ${getWithExpiry("userauth")}`
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

HTTP.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    const currentime = now.getTime() / 1000
    const expire_at = item.expiry
    if (currentime > expire_at) {
        localStorage.removeItem(key)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        return null
    }

    return item.value
}
export default HTTP
