import { createContext, useContext, useState } from "react";
import { Spinner } from "../Component/Spinner/Spinner";


export const SpinnerCtx=createContext(false);

export const SpinnerProvider=({children})=>{
    const [showSpinner,setShowSpinner]=useState(false)
    return <SpinnerCtx.Provider value={[showSpinner,setShowSpinner]}>
            <>
            {showSpinner && <Spinner />}
            {children}
            </>
    </SpinnerCtx.Provider>
}

export const SpinnerContext=()=>{
    return useContext(SpinnerCtx)
}
