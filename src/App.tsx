import DashBoard from "./pages/Dash-board"
import {createBrowserRouter ,  createRoutesFromElements, RouterProvider, Route, }  from "react-router-dom"
import OverViewPage from "./pages/OverViewPage"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path = "/" 
    element = {<DashBoard/>}
      >
    <Route 
    index
    element= {<OverViewPage/>}/>

      </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router}/>
    
  )
}

export default App