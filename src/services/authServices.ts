import { useMutation } from 'react-query';

const API_URL = 'https://todo.de-code.uz/api';

export const useLogin = () => {
   return useMutation((credentials: { username: string; password: string }) =>
      fetch(`${API_URL}/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(credentials),
      }).then((res) => res.json())
   );
};

export const useLogout = () => {
   return useMutation<number, Error>(async (): Promise<number> => {
      return new Promise((resolve) => {
         resolve(1);
      });
   });
};