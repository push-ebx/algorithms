import $api from "./config";
import {AxiosResponse} from 'axios';

type User = {
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  sex: string,
  password: string
}

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse> {
    const response = await $api.post('/login', {username, password})
    localStorage.setItem('token', response.data.accessToken);
    return response

  }

  static async registration(user: User): Promise<AxiosResponse> {
    return $api.post('/registration', user)
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }

  static fetchUser() {
    return $api.get('/user?username=admin')
  }
}