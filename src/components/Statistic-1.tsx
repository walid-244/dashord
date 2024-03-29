import PieChartCom from "./Pie-Chart";




const Statistic1 = () => {
 return (
    <div className="flex flex-col ">
       <div className="flex m-1 flex-col p-4 drop-shadow-md rounded-2xl bg-slate-50 ring-offset-[#000000]  w-[550px] ">
        <div className="flex justify-between text-center items-center">
            <h2 className="text-black text-3xl font-semibold ">Total</h2>
            <div className="flex gap-3.5 justify-between">
            <p className="text-base " ><span></span>Total funds allecated</p>
            <p className="text-base "><span></span>Total profit from closed trades</p>
            </div>
        </div>
        <div className="h-[348px] flex justify-center items-center bg-slate-50">
          <PieChartCom/>
        </div>
       </div>
       <div className="flex flex-col h-[500px] bg-slate-50 rounded-2xl  " >
           <div className="flex w-full   items-center  ">
            <div className="flex flex-col w-[250px] rounded-3xl bg-[#4774b7] m-4 h-[200px] items-start pl-5 justify-center bg-slate-800">
               <p className="text-base text-neutral-100 ">Number of closed <br/>trades in profit </p>
               <p className="text-white text-4xl font-bold ">27</p>
            </div>
            <div className= "flex flex-col w-full m-4 h-[200px] rounded-3xl items-start pl-5 justify-center bg-[#1A1C1E] ">
               <p className="text-base text-neutral-100 ">highest loser  </p>
               <p className="text-white text-4xl font-bold">-3.4%</p>
            </div>
           </div>
            <div className="flex w-full   items-center  ">
            <div className="flex flex-col w-full pl-5 items-start rounded-3xl justify-center m-4  h-[200px] bg-[#1A1C1E]">
               <p className="text-base  text-neutral-100 ">highest winner </p>
               <p className="text-white text-4xl font-bold ">89.4%</p>
            </div>
            <div className= "flex flex-col w-[290px] items-start bg-[#4774b7] pl-5 rounded-3xl justify-center m-4 h-[200px] bg-slate-800">
               <p className="text-base text-neutral-100 ">number of closed <br/> trades in loss</p>
               <p className="text-white text-4xl font-bold   ">9</p>
            </div>
           </div>
           
       </div>
    </div>
 )
}

export default Statistic1 ;