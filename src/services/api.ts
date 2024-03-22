import { useAuth } from "@/components/providers/auth-provider";

const handleUnauthorized = () => {
   const { logout } = useAuth();
   logout();
   // You can also redirect the user to a login page or show an error message
};

export const customFetch = async (url: string, options?: RequestInit): Promise<Response> => {
   const { user } = useAuth();
   const headers = new Headers(options?.headers);

   headers.set('Content-Type', 'application/json');

   if (user && user.token) {
      headers.set('Authorization', `Bearer ${user.token}`);
   }
   const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${url}`, { ...options, headers });

   if (response.status === 401 || response.status === 403) {
      // Unauthorized or Forbidden
      handleUnauthorized();
   }

   return response;
};
