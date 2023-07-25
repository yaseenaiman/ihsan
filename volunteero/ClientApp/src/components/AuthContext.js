import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const accessToken = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (accessToken && userId) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const login = () => {
        // Perform login logic here

        // Update the isLoggedIn state and store the token and user ID in local storage
        setIsLoggedIn(true);
        localStorage.setItem("token", "your_access_token");
        localStorage.setItem("userId", "your_user_id");
    };

    const logout = () => {
        // Perform logout logic here

        // Update the isLoggedIn state and remove the token and user ID from local storage
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
