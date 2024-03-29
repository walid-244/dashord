import Statistic1 from "../components/Statistic-1";
import Statistic2 from "../components/Statistic-2";


const Statistic = () => {
 return (
    <div className="flex flex-col w-full h-full  lg:flex-row">
        <div>
            <Statistic1/>
        </div>
        <div>
         <Statistic2/>
        </div>
    </div>
 )
 

}

export default Statistic ;