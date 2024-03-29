const MySaving = () => {
    return (
        <div className="flex  flex-col  items-start justify-start "> 
            <h1 className="ml-4 text-[#D9D9D9]">My Saving</h1>
            <div  className="container bg-[#333333] rounded-2xl ">
             <ul className="items-center justify-start flex flex-col">
                <li className="h-10 w-52 flex items-center gap-3 text-slate-50 "><span className="justify-start ml-4 gap-x-4 bg-[#5151F9] "></span>Wedding</li>
                <li className="h-10 w-52 flex items-center gap-3 text-slate-50 "><span className="justify-start ml-4 gap-x-4 bg-[#BB90FF] "></span>Macbook Pro M2</li>
                <li className="h-10 w-52 flex items-center gap-3 text-slate-50 "><span className="justify-start ml-4 gap-x-4 bg-[#FCD240] "></span>Traveling</li>
                <li className="h-10 w-52 flex items-center gap-3 text-slate-50 "><span className="justify-start ml-4 gap-x-4 bg-[#62FF55] "></span>Motorcycles</li>
            </ul>
                <button className="h-10 w-52  hover:bg-[#5172f9cc] bg-[#5151F9] hover:text-white rounded-3xl activ:bg-[#5151F9]"><span className=" h-8   ml-4 ">+</span> Add saivings </button>
            </div>
        </div>
    )
    
}

export default MySaving