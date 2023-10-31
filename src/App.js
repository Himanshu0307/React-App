
import { Suspense, useEffect } from 'react';
import './App.css';

import { SpinnerProvider } from './Store/SpinnerProvider';
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { lazy } from 'react';
import { applyTheme } from './theme/utils';

import darkTheme from './theme/dark';



function App() {
  useEffect(()=>{
    
     },[])
  const Login=lazy(()=>import('./Pages/Login/Login'));
  const Home=lazy(()=>import('./Pages/Home/Home'),)

  const routes=createBrowserRouter([
    {path:'/',element:sessionStorage.getItem('session')?<Navigate to='home' />:<Navigate to='/login'/>,children:[
        {path:'home',element:<Home />}]},
        {path:'/login',element:<Login />}
      ])
  
  return (
    <SpinnerProvider>
      <Suspense fallback={'Loading...'} >
      <RouterProvider router={routes}><Outlet /></RouterProvider>
      </Suspense>
     </SpinnerProvider>
  );
}

export default App;
