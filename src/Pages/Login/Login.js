import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Assets/sssurf.svg"

import { TextButton, TextField } from "../../Component/FormComp"
import { makeReq } from "../../Network/Request";
import { SpinnerContext } from "../../Store/SpinnerProvider";


  const Login=memo(()=>{
    const [_,setShowSpinner]=SpinnerContext() 
    const navigate=useNavigate();
    var username=useRef();
    var password=useRef();
    return <div className="shadow-inner w-full h-screen" style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
        <form className="h-full flex">
        <div className="flex flex-col w-3/12 outline outline-offset-2 outline-gray-400 m-auto  place-content-center gap-4 p-4 rounded-lg">
        <TextField placeholder="Enter Username" ref={username} ></TextField>
        
        <TextField placeholder="Enter Password"  ref={password}></TextField>
        <TextButton color="secondary" text="Login"  onClick={async (event)=>{
            event.preventDefault()
            let user=username.current.value
            let pass=password.current.value
            try{
                var request={username:user,password:pass}
                var response=await makeReq(request,setShowSpinner);
                document.cookie=`sessionId=${response.sessionid};SameSite=None;Secure`
                delete response.sessionid
                sessionStorage.setItem("session",JSON.stringify(response))
                navigate("/Home")


            }
            catch(e){
                
                console.log("sdfsf",e.message)
            }
        }}></TextButton>
        </div>
        </form>
    </div>
})

export default Login;
