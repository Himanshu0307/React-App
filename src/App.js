import { Suspense, useEffect } from "react";
import "./App.css";

import { SpinnerProvider } from "./Store/SpinnerProvider";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { lazy } from "react";
import { applyTheme } from "./theme/utils";

import darkTheme from "./theme/dark";
import baseTheme from "./theme/base";
import { ProtectedLayout } from "./Component/Layout/ProtectedLayout";
import { Error404 } from "./Pages/Error/404";
import { AppLayout } from "./Component/Layout/AppLayout";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  const Login = lazy(() => import("./Pages/Login/Login"));
  const Home = lazy(() => import("./Pages/Home/Home"));

  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error404></Error404>,
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/",
          element: <ProtectedLayout></ProtectedLayout>,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },

    { path: "/*", element: <Error404 /> },
  ]);

  return (
    <SpinnerProvider>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={routes}>
          <Outlet />
        </RouterProvider>
      </Suspense>
    </SpinnerProvider>
  );
}

export default App;
