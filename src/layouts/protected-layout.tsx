import React, { memo } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/components/providers/auth-provider";
import { Container } from "@/components/container/container";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

type ProtectedLayoutPropsType = {
   allowedRoles: string[];
};

const ProtectedLayout = ({ allowedRoles }: ProtectedLayoutPropsType) => {
   const { user } = useAuth()
   const location = useLocation()
   return (
      user?.roles.find(role => allowedRoles.includes(role))
         ?
         <React.Fragment>
            <Navbar />
            <Sidebar />
            <Container>
               <Outlet />
            </Container>
         </React.Fragment>
         : user?.name
            ? <Navigate to={"/unauthorized"} state={{ from: location }} replace />
            : <Navigate to={"/login"} state={{ from: location }} replace />
   );
};

export default memo(ProtectedLayout);