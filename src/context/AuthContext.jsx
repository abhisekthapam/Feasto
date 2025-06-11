import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

const mockUsers = {
  admin: {
    id: 1,
    name: "Admin",
    role: "admin",
    email: "admin@gmail.com",
    username: "adminUser",
  },
  superadmin: {
    id: 2,
    name: "SuperAdmin",
    role: "superadmin",
    email: "superadmin@gmail.com",
    username: "superUser",
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (role) => {
    if (mockUsers[role]) {
      setUser(mockUsers[role]);
      localStorage.setItem("user", JSON.stringify(mockUsers[role]));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
