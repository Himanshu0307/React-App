import { Navigate, Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { memo, useEffect, useState } from "react";

const Dashboard = memo(({ menuList }) => {
  const [isOpen, setOpen] = useState(true);

  return isOpen ? (
    <>
      <div className="w-1/6 rounded overflow-hidden shadow-lg h-full p-3 m-3 ">
        <div className="border-b-2 ">
          <ChevronDoubleLeftIcon
            className="float-right text-gray-400"
            style={{ height: "40px", scale: 1 }}
            onClick={() => {
              setOpen(() => !isOpen);
            }}
          ></ChevronDoubleLeftIcon>
        </div>
        {menuList.map((x) => {
          return (
            <Disclosure as="div" className={"my-2"} key={x.Module}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full mx-auto rounded-2xl bg-white p-2 text-gray-600 font-semibold border border-gray-500">
                    <span>{"sdfsdfdsfdsf"}</span>
                    <ChevronUpIcon // return <>dsfjkhsdfkjsdhfkjsdhfk</>;
                      className={`${
                        open ? "rotate-180 transform" : "rotate-90 transform"
                      } h-5 w-5  inline float-right mx-2`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>Submenus.....</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
      <div></div>
    </>
  ) : (
    <div
      className="rounded overflow-hidden shadow-lg h-full p-3 m-3 border-1 border-gray-400 flex flex-col"
      style={{ width: "40px" }}
    >
      <ChevronDoubleRightIcon
        className=" text-gray-400"
        style={{ height: "40px", scale: 1 }}
        onClick={() => {
          setOpen(() => !isOpen);
        }}
      ></ChevronDoubleRightIcon>
    </div>
  );
}, []);

export function ProtectedLayout() {
  if (!sessionStorage.getItem("session")) {
    return <Navigate to="/login"></Navigate>;
  }
  const MenuData = [
    { Module: "Module1", SubMenu: [{ name: "sdfsdfsdf" }] },
    { Module: "Module 2", SubMenu: [{ name: "sdfsdfsdf" }] },
  ];
  return (
    <div style={{ height: "100dvh" }}>
      <Dashboard menuList={MenuData}></Dashboard>
    </div>
  );
}
