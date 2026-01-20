
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayOut from "./layOut";



const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    errorElement:<p>Hello</p>,
    children: [
   
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
