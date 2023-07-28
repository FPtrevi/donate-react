import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Store from "./pages/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/shop",
    element: <Store />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
