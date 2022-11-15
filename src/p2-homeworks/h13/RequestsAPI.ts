import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

type ResponseType = {
  errorText: string
  info: string
  yourBody: { success: string }
  yourQuery: {}
}

export const RequestsAPI = {
  postCheckboxValue(checkboxValue: boolean) {
    return instance.post<ResponseType>('', { success: checkboxValue })
  },
}
