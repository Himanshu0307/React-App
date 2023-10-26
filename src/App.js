
import { Suspense, useEffect } from 'react';
import './App.css';

import { SpinnerProvider } from './Store/SpinnerProvider';
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Spinner } from './Component/Spinner/Spinner';
import { lazy } from 'react';
import { applyTheme } from './theme/utils';
import baseTheme from './theme/base';
import darkTheme from './theme/dark';
// import Login from './Pages/Login';


function App() {
  useEffect(()=>{
    applyTheme(darkTheme)
  },[])
  const Login=lazy(()=>import('./Pages/Login/Login'));
  const Home=lazy(()=>import('./Pages/Home/Home'),)

  const routes=createBrowserRouter([{id:1,path:'/',element:sessionStorage.getItem('session')?<Navigate to='/Home' />:<Navigate to='/Login'/>,
  children:[  {path:'/Home',element:<Home />}]},{path:'/Login',element:<Login />}])
  
  return (
    <SpinnerProvider>
      <Suspense fallback={'Loading...'} >
      <RouterProvider router={routes}><Outlet></Outlet></RouterProvider>
      </Suspense>
     </SpinnerProvider>
  );
}

export default App;
