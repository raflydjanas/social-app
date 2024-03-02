import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
    axios.post('https://api-mini-socmed.notneet.my.id/auth/login', data)
    .then((res) => {
        callback(true, res.data.accessToken);
    }).catch((err) => {
        callback(false, err);
    })
}


export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.name;
} 