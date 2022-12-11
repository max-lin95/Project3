// import { createContext, useReducer } from "react";

// export const AuthContext = createContext()

// export const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {user: action.payload}
//         case 'LOGOUT':
//             return {user: null}
//         default:
//             return state
//     }
// }

// export const AuthContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })

//     console.log('AuthContext state: ', state)

//     return (
//         <AuthContext.Provider value={{...state, dispatch}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

import decode from 'jwt-decode';
import { loginUser } from './API';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }

    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    loginUser(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();