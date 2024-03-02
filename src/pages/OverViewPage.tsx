
import App from "../App";
import OverView2 from "../components/Over-View";
import Overview from "../components/OverView"
  

const OverViewPage = () => {
   return<>
    <div>
      <App/>
   <div className="flex">
      <Overview/>
      <div className="flex  w-[720px]  ">
       <OverView2 />
      </div>
   </div>
   </div>
   
   
   
   </>
}

export  default OverViewPage;