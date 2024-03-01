import  Header  from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import { Error } from "./components/Error";
import { About } from "./components/About";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import { Contact } from "./components/Contact";
import { Size } from "./components/Size";
import { Carts } from "./components/Carts";
import { Thanks } from "./components/Thanks";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/product/:id",
        element:<Size/>
      },
      {
        path:"/cart",
        element:<Carts />
      },
      {
        path:"/thanks",
        element:<Thanks />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)

