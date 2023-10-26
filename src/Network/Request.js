import { SpinnerContext } from "../Store/SpinnerProvider";

export const makeReq=(request,setSpinner)=>{
    setSpinner(()=>true)
    return new Promise((resolve,revoke)=>{
        setInterval(() => {
           if(request?.username==='User' && request?.password==='User')
           return resolve({status:200,username:'Subadmin',iconPath:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',sessionid:(Math.random() + 1).toString(36).substring(2)})
            else{
            return revoke({message:"You are not authorized", status:401})
        }
        }, 1000);
    }).finally(()=>{
        setSpinner(()=>false)
    })
}