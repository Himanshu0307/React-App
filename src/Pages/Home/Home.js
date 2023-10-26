import { memo } from "react"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Outlet } from "react-router-dom"



 const Home=memo(()=>{

    const MenuData=[{Module:"Module1",SubMenu:[{name:'sdfsdfsdf'}]},{Module:"Module 2",SubMenu:[{name:'sdfsdfsdf'}]}]
    return <div style={{height:'100dvh'}}><Dashboard menuList={MenuData}></Dashboard> <Outlet /></div>
})



const Dashboard=(({menuList})=>{
    return <><div className="w-1/6 rounded overflow-hidden shadow-lg h-full p-3 m-3 ">
      {
       menuList.map((x)=>{
        return  <Disclosure as="div" className={'my-2'} key={x.Module} >
        {({open})=>
       <>
        <Disclosure.Button className='w-full mx-auto rounded-2xl bg-white p-2 text-gray-600 font-semibold border border-gray-500'>
            <span >{x.Module}</span>
             <ChevronUpIcon className={`${
                open ? 'rotate-180 transform' : 'rotate-90 transform'
              } h-5 w-5  inline float-right mx-2`} />
        </Disclosure.Button>
        <Disclosure.Panel>
           Submenus.....
        </Disclosure.Panel>
        </>
        }
       
    </Disclosure>
        
       })}
    </div>
    <div>

    </div>
    </>

})


const NavBar=({menuList})=>{
    
}



export default Home;


