import { forwardRef } from "react"

export const TextField=forwardRef(function TextField({placeholder ,className},ref){
return <input ref={ref} type="text" placeholder={placeholder} className={ `shadow appearance-none border bg-slate-100  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${className}`}></input>
})

export const TextButton=({text,onClick,color,className})=>{
return <button onClick={onClick} className={`text-white  bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none`}>{text}</button>
}