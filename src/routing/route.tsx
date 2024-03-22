import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Roles } from '@/types'
import Layout from '@/layouts/layout'
import ProtectedLayout from '@/layouts/protected-layout'
import Login from '@/pages/auth/login/login'
import NotFound from '@/pages/not-found'
import Projects from '@/pages/projects'
import Tasks from '@/pages/tasks'
import Home from '@/pages/home'
import Unauthorized from '@/pages/auth/unauthorized/unauthorized'
import Director from '@/pages/director'


export const Routing = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='login' element={<Login />} />
               <Route path='unauthorized' element={<Unauthorized />} />
               <Route element={<ProtectedLayout allowedRoles={[Roles.User]} />}>
                  <Route path='/' element={<Home />} />
                  <Route path='tasks' element={<Tasks />} />
               </Route>
               <Route element={<ProtectedLayout allowedRoles={[Roles.Admin]} />}>
                  <Route path='projects' element={<Projects />} />
               </Route>
               <Route element={<ProtectedLayout allowedRoles={[Roles.Director]} />}>
                  <Route path='director' element={<Director />} />
               </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}
