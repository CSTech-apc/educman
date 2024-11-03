/* axios */
import axios, { AxiosError } from 'axios'

/* cookies */
import { parseCookies } from 'nookies'

/* errors */
import { AuthTokenError } from './errors/AuthTokenError'


export const setupAPIClient = (ctx = undefined) => {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: "http://localhost:5000/educman/api/v1",
    headers: {
      Authorization: `Bearer ${cookies['@educman.token']}`
    }
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window != undefined) {
          /* signOut() */
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}
