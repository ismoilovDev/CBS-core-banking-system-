import { useAuth } from '@/components/providers/auth-provider';
import React, { useState } from 'react';

const Login: React.FC = () => {
   const { login } = useAuth();
   const [credentials, setCredentials] = useState({ phone: '', password: '' });
   const [loading, setLoading] = useState<boolean>(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
   };

   const handleLogin = (e: React.SyntheticEvent) => {
      e.preventDefault()
      setLoading(true);
      login(credentials);
   };

   return (
      <div className='bg-blue-600 min-h-screen flex items-center justify-center'>
         <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Войти в аккаунт</h2>
            <form onSubmit={handleLogin}>
               <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 mb-1 font-semibold">Телефон</label>
                  <input type="tel" name="phone" id="username" value={credentials.phone} onChange={handleInputChange} className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 mb-1 font-semibold">Пароль</label>
                  <input type="password" id="password" name="password" value={credentials.password} onChange={handleInputChange} className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
               </div>
               <div className="flex items-center justify-between">
                  <button type="submit" className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                     {
                        loading
                           ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.71l-4.58 4.59a1 1 0 000 1.42l4.58 4.59a1 1 0 101.42-1.42L10.41 11H12a6 6 0 100 12 1 1 0 000-2 4 4 0 01-4-4H4a1 1 0 00-.97.757 1 1 0 00.97.743z"></path></svg>
                           : 'Войти'
                     }
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
