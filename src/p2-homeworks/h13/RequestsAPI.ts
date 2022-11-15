import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const RequestsAPI = {
  postCheckboxValue(checkboxValue: boolean) {
    return instance.post('', { success: checkboxValue })
  },
}
