

const Overview = () => {
    
return (
    <div  className="flex flex-col gap-4 m-5 drop-shadow-md rounded-2xl ">
        <div className="flex gap-4 justify-between max-w-full ">
            <h2 className="text-[#262626] text-xl font-semibold ">
                Your Balance <br/>$323,000,00 
            </h2>
            <ul className="flex flex-row gap-3 ">
                <li ><img src="/assets/Vector.svg"/></li>
                <li><img src="/assets/22.svg"/></li>
                <li><img src="/assets/23.svg"/></li>
            </ul> 
        </div>
        <div className="max-w-full flex flex-col ">
            <img src="/assets/card.png"/>
            <button className="text-[#ACACAC] border-dashed  rounded-2xl h-12">Add card</button>
        </div>
        <div className="flex justify-center items-center flex-col w-full gap-3.5 ">
            <div className="flex justify-center items-center  max-w-full gap-3.5" >
            <div className="flex drop-shadow-md rounded-2xl ring-offset-[#000000] flex-col justify-center items-center h-40 w-48 text-[#262626] font-semibold text-base bg-[#FFFFFF]  "> 
                 <img className="" src="/assets/com-1.svg"/>
                 <button>Transfer</button>
            </div>
            <div className="flex flex-col rounded-2xl drop-shadow-md justify-center items-center h-40 w-48 text-[#262626] font-semibold text-base bg-[#FFFFFF] ">
                 <img className="" src="/assets/com-1.svg"/>
                 <button>Bil payment</button>
            </div>
            </div>
            <div className="flex justify-center items-center max-w-full  gap-3.5" >
            <div className="flex flex-col rounded-2xl drop-shadow-md justify-center items-center h-40 w-48 text-[#262626] font-semibold text-base bg-[#FFFFFF] ">
                 <img className="" src="/assets/com-1.svg"/>
                 <button>E card</button>
            </div>
            <div className="flex flex-col rounded-2xl drop-shadow-md justify-center items-center h-40 w-48 text-[#262626] font-semibold text-base bg-[#FFFFFF] ">
                 <img className="" src="/assets/com-1.svg"/>
                 <button>Saving</button>
            </div>
            </div>
            
            <button className="bg-[#5151F9] h-14 w-18 rounded-3xl text-[#FFFFFF] w-[384px]">See All</button>
        </div>

    </div>
)
}

export default Overview;