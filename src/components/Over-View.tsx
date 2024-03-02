import Transactions from "./Transactions"

const OverView2 = () =>{
return (
    <div className="flex flex-col w-full gap-4 m-5   ">
        <div className="flex justify-between ">
            <h1 className="text-[#262626] text-xl font-semibold" >Hello Ricie</h1>
            <div className="flex w-[401px] h-12   rounded-3xl bg-[#F7F7F7]">
                <input className="bg-[#F7F7F7] border-0 w-[350px] rounded-3xl" type="search" placeholder="Search"/>
                <button><img src="/assets/serch.svg"/></button>
                <img src="/assets/Notifications.svg"/>   
            </div>
        </div>
        
        <div className="flex justify-between  drop-shadow-md rounded-2xl ">
            <h2 className="text-[#262626] text-2xl font-medium"> Financial statistics</h2>
            <div className=" flex gap-4  justify-between ">
            <button className="w-20 h-7  hover:bg-[#5151F9] text-[#AFAFAF] bg-[#E9E9E9] rounded-3xl text-sm font-normal">Weekly</button>
            <button className="w-20 h-7  hover:bg-[#5151F9] text-[#AFAFAF] bg-[#E9E9E9] rounded-3xl text-sm font-normal">Monthly</button>
            <button className="w-20 h-7 hover:bg-[#5151F9] text-[#AFAFAF] bg-[#E9E9E9] rounded-3xl text-sm font-normal">Annual</button>
          </div>
        </div>
        <div className="flex justify-between  drop-shadow-md rounded-2xl ">
            <p>Average monthly expenses <span className="text-[#5151F9]">$1,890.00</span></p>
            <div className="flex justify-center items-center gap-7">
                <p><span></span>Expenditure</p>
                <p><span></span>Income</p>
            </div>
        
        
        </div>
        <div className="h-[348px] bg-slate-50"></div>
        <Transactions/>
    </div>
)

}

export default  OverView2;