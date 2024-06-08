import App from "./App";
import ErrorPage from "./components/ErrorPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ProjectPage from "./components/Projects.jsx";
import JavaPage from "./components/Java.jsx";
import JSPage from "./components/JavaScript.jsx";
import PythonPage from "./components/Python.jsx";

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
        },
        {
          path: "projects/java",
          element: <JavaPage/>,
        },
        {
          path: "projects/javascript",
          element: <JSPage/>,
        },
        {
          path: "projects/python",
          element: <PythonPage/>,
        },
      ]
    }
  ];
  
  export default routes;