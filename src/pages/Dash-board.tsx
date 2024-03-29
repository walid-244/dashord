import Menu from "../components/Menu";
import MySaving from "../components/My-Saving";
import Customization from "../components/Customization";


import { Outlet } from "react-router-dom";



const DashBoard = () => {
  return(
     <div className="container h-screen w-full flex p-0 m-0    ">
    <div className="bg-stone-900 h-screen  flex flex-col w-72 items-center justify-start gap-11">
      <div className="flex items-start">
        <h1 className="text-slate-200 text-start  my-3.5 text-xl">Perbankie</h1>
      </div>
      <Menu />
      <MySaving/>
      <Customization/>
    </div>
    <div className="h-screen w-screen overflow-y-scroll">
        <Outlet/>
    </div>
    </div>
  )
}

export default  DashBoard;