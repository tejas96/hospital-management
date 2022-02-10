import React, { createContext } from "react";

interface AuthContextData {
  login(): Promise<any>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const login = () => {
    localStorage.setItem("@HospitalManagement:token", "123");
  };
  const logout = () => {
    localStorage.removeItem("@HospitalManagement:token");
  };
  const context = { login, logout } as AuthContextData;
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
