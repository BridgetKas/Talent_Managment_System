
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayOut from "./layOut";
import HomePage from "./pages/Home/homePage";



const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    errorElement:<p>Hello</p>,
    children: [
      {
        index:true,
        element:<HomePage/>
      }
   
    ]
  }
  
])
function App() {
  
  return (
      <div id='light'>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
