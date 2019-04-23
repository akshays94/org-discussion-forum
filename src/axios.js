import axios from 'axios'

let domainName = location.host
let domainUrl = domainName.split('.')

let API_URL = ''

if (domainUrl.length > 2) {
  let currentTenant = domainUrl[0]
  API_URL = `${process.env.VUE_APP_API_HOST}${currentTenant}.${process.env.VUE_APP_API_URL}`
} else {
  API_URL = `${process.env.VUE_APP_API_HOST}${process.env.VUE_APP_API_URL}`
}

const HTTP = axios.create({
  baseURL: API_URL
})

HTTP.defaults.headers.common['Authorization'] = `JWT ${localStorage.token}`

export { HTTP }
