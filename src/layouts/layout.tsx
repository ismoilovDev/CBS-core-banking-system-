import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const Layout = () => {
   return (
      <React.Fragment>
         <Outlet />
         <ReactNotifications />
      </React.Fragment>
   )
}

export default Layout