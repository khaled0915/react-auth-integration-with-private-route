import { createContext } from "react";

import PropTypes from 'prop-types';

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = { name : 'ozge torer' }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node 
}


/**
 * 
 * step ; 
 * 
 * 1. create context and export it
 * 
 * 2. set provider with value
 * 
 * 3. use the auth provider in the main.jsx file 
 * 
 * 4 . access children in the authentication component as children and use it in the midddle of the provider
 */