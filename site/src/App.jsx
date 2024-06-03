import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ROUTES } from "./routes"
import Home from "./pages/Client/Home/Home"
const routes = createBrowserRouter(ROUTES)

function App() {


  return (
    <>
      <RouterProvider router={routes} />
      {/* <Home/> */}
    </>
  )
}

export default App
