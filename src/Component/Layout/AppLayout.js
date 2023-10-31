import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="shadow-inner w-full h-screen">
      <Outlet />
    </div>
  );
};
