import axios from 'axios'

const baseUrl = '/api'

export function getAllJobs() {
  return axios.get(`${baseUrl}/jobs/`)
}