import axios from 'axios'
const loginBaseUrl = `http://localhost:8085/cricket/login`

const login = async (credentials) => {
  
  const response = await axios.post(loginBaseUrl, credentials)
  return response.data
}

const exportObject = { login }
export default exportObject