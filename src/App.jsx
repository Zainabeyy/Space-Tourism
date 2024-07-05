import HomePage from "./pages/Home.jsx";
import DestinationPage from "./pages/Destination.jsx";
import TechnologyPage from "./pages/Technology.jsx";
import CrewPage from "./pages/Crew.jsx";
import ErrorPage from "./errorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement:<ErrorPage/>
    },
    {
      path: "/destination",
      element: <DestinationPage/>,
    },
    {
      path: "/crew",
      element: <CrewPage/>,
    },
    {
      path: "/technology",
      element: <TechnologyPage/>,
    },
  ]);
  return (
    <div>
      <Nav/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
