const Transactions2 = () => {
    return(
        <div className="flex flex-col  w-[600px] drop-shadow-md rounded-2xl mt-4 ">
            <div className="flex justify-between items-center w-full  ">
                <h1 className=" text-[#262626] mb-4 text-2xl font-medium">Latest Transactions</h1>
                <ul className="flex justify-center items-center ">
                    <li className="text-[#6A67DE] mb-4 font-medium tetx-m no-underline">View All</li>
                </ul>
            </div>
            
            <div className="flex justify-between h-60">
                <div className="flex flex-col justify-between  font-medium text-sm">
                    <h3 className="text-[#727272] mb-4 border-b-2">Full Name</h3>
                    <p className="">Robert Fox</p>
                    <p>Jane Cooper</p>
                    <p>Roberto Mancini</p>
                    <p>Roberto Mancini</p>
                </div>
                <div className="flex flex-col justify-between text-sm text-[#262626] h-60">
                     <h3 className="text-[#727272] mb-4 border-b-2">ID Number</h3>
                     <p>ID : 3467 5434</p>
                     <p>ID : 3467 5320</p>
                     <p>ID : 3467 5242</p>
                     <p>ID : 3467 5242</p>
                </div>
                <div className="flex flex-col justify-between text-sm text-[#262626] h-60">
                    <h3 className="text-[#727272] mb-4 border-b-2">Date</h3>
                     <p>22 March 2020</p>
                     <p>21 March 2020</p>
                     <p>21 March 2020</p>
                     <p>21 March 2020</p>
                </div>
                
                <div className="flex flex-col justify-between text-sm text-[#262626] h-60">
                    <h3 className="text-[#727272] mb-4 border-b-2">Type</h3>
                     <p>Fashion</p>
                     <p>Eat</p>
                     <p>Hedon</p>
                     <p>Hedon</p>
                </div>
                <div className="flex flex-col justify-between text-sm text-[#5151F9] h-60">
                    <h3 className="text-[#727272] mb-4 border-b-2">Price</h3>
                     <p>+$18,00</p>
                     <p>+$15,00</p>
                     <p>+$30,00</p>
                     <p>+$30,00</p>
                </div>
            
            </div>
        </div>
    )
}


export default Transactions2;