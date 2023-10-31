import { forwardRef } from "react";
import { ShieldExclamationIcon } from "@heroicons/react/20/solid";

export const TextField = forwardRef(function TextField(props, ref) {
  return (
    <>
      <input
        ref={ref}
        {...props}
        className={`shadow appearance-none border bg-slate-100  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${props.className}`}
      ></input>
      {props.errors && (
        <label className="text-red-500">
          <ShieldExclamationIcon
            className="mx-2"
            style={{ width: "15px", scale: 1, display: "inline" }}
          ></ShieldExclamationIcon>
          {props.errors.message}
        </label>
      )}
    </>
  );
});

export const TextButton = ({ text, onClick, color, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white  bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none`}
    >
      {text}
    </button>
  );
};
