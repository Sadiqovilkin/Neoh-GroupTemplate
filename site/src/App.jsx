import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ROUTES } from "./routes"

import { DataContextProvider } from "./context/context"
const routes = createBrowserRouter(ROUTES)

function App() {


  return (
    <>
    <DataContextProvider>

      <RouterProvider router={routes} />

    </DataContextProvider>
      {/* <Home/> */}
    </>
  )
}

export default App
