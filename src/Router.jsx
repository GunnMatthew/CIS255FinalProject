import App from "./App";
import ErrorPage from "./components/ErrorPage.jsx";
import AboutMe from "./components/AboutMe.jsx";

// Establish routes to be navigated
const routes = [
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "AboutMe",
          element: <AboutMe/>,
        },
        {
          path: "projects",
          element: <ErrorPage/>,
        }
      ]
    }
  ];
  
  export default routes;