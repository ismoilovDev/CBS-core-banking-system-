import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useMutation } from 'react-query';
import { showNotification } from '../notification/notification';

interface User {
   name: string;
   phone: string;
   token: string;
   roles: string[];
}

interface AuthProviderProps {
   children: ReactNode;
}

interface AuthContextType {
   user: User | null;
   login: (credentials: { phone: string; password: string }) => Promise<void>;
   logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   const [user, setUser] = React.useState<User | null>(JSON.parse(window.localStorage.getItem('user') as string) || null);

   const loginMutation = useMutation<void, Error, { phone: string; password: string }>(
      (credentials) => {
         return fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
         }).then(async (response) => {
            if (!response.ok) {
               throw new Error('Login failed');
            }
            if (response.ok) {
               showNotification({
                  title: 'Авторизация успешна!',
                  message: 'Добро пожаловать!',
                  type: 'success',
                  location: 'top-right',
                  duration: 5000
               });
               const userRes = await response.json();
               setUser({ ...userRes.payload, roles: ['USER', 'ADMIN'] });
               localStorage.setItem('user', JSON.stringify({ ...userRes.payload, roles: ['USER', 'ADMIN'] }));
            }

         });

      }
   );

   const login = async (credentials: { phone: string; password: string }) => {
      try {
         await loginMutation.mutateAsync(credentials);
         window.location.pathname = '/';
      } catch (error: any) {
         console.error('Login failed:', error.message);
      }
   };

   const logout = () => {
      setUser(null)
      window.localStorage.clear()
   };

   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(JSON.parse(storedUser));
      }
   }, []);

   return (
      <AuthContext.Provider value={{ user, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
   }

   return context;
};
