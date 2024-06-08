import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import ImageAvatars from './components/Avatar'
import BasicButtonGroup from './components/ButtonGroup'

function App() {
  const isHomePage = useLocation().pathname === '/';

  return (
    <>
    <header className={isHomePage ? 'largeHeader' : 'smallHeader'}>
      <div>
        <ImageAvatars/>
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
