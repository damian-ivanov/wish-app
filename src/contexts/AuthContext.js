import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../config/firebaseConfig';

import { createContext } from 'react';
import { useEffect, useState } from "react"

initializeApp(firebaseConfig);

export const auth = getAuth();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};