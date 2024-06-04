import App from "./App";
import ErrorPage from "./components/ErrorPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ProjectPage from "./components/Projects.jsx";

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
          element: <ProjectPage/>,
        }
      ]
    }
  ];
  
  export default routes;