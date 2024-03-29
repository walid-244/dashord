

import OverView2 from "../components/Over-View";
import Overview from "../components/OverView"
  

const OverViewPage = () => {
   return<>   
   <div className="flex flex-col lg:flex-row o ">
      <Overview/>
      <div className="flex  w-[720px]  ">
       <OverView2 />
      </div>
   </div>
   </>
}

export  default OverViewPage;