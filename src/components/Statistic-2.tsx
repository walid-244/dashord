import BarChartCom from './Bare'

import Transactions2 from './Transction';


const Statistic2 = () =>{
  return (
    <div className="flex flex-col w-full  ">
        <div className="flex flex-col m-1 p-4 drop-shadow-md rounded-2xl bg-slate-50 h-[400px] w-[800px]">
            < Transactions2/>
        </div>
        
        <div className="flex flex-col m-1 mt-5 ">
            <div className= "drop-shadow-md rounded-2xl w-full h-full bg-slate-50"> 
            <h1 className="text-black text-3xl  font-semibold">Trades</h1>
             <section className="  my-0 mx-auto w-[380px] h-[400px]">
          <BarChartCom />
        </section>
             
            </div>
        </div>     
    </div>
  )
}

export default  Statistic2;

