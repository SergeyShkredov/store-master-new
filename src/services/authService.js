import axios from 'axios';
import configSystem from './configSystem'

class AuthService {
  login(user) {
    return axios
      .post(configSystem.API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  register(user) {
    return axios.post(configSystem.API_URL + 'signup', {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email

    });
  }
}

export default new AuthService();
