import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import ImageAvatars from './components/Avatar';
import BasicButtonGroup from './components/ButtonGroup';
import javaAvatar from './assets/images/java.png';
import javascriptAvatar from './assets/images/javascript.png';
import pythonAvatar from './assets/images/python.png';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isJavaPage = location.pathname === '/Projects/java';
  const isJavaScriptPage = location.pathname === '/Projects/javascript';
  const isPythonPage = location.pathname === '/Projects/python';

  return (
    <>
    <header className={isHomePage ? 'largeHeader' : 'smallHeader'}>
      <div>
        {isJavaPage ? (
          <ImageAvatars src={javaAvatar} alt="Java Logo"/>
        ) : isJavaScriptPage ? (
          <ImageAvatars src={javascriptAvatar} alt="JavaScript Logo"/>
        ) : isPythonPage ? (
          <ImageAvatars src={pythonAvatar} alt="Python Logo"/>
        ) : (
          <ImageAvatars/>
        )}
      </div>
      <div>
        <h1>Matthew Gunn</h1>
        <BasicButtonGroup buttonOne="About Me" buttonTwo="My Github" buttonThree="Other Projects"/>
        {isHomePage && <p>Please select a destination from above.</p>}
      </div>
    </header>
    <main className={isHomePage ? '' : 'mainContent'}>
      <Outlet/>
    </main>
    </>
  );
}

export default App
