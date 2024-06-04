import { Outlet } from 'react-router-dom'
import './App.css'
import ImageAvatars from './components/Avatar'
import RenderName from './components/RenderName'
import BasicButtonGroup from './components/ButtonGroup'

function App() {

  return (
    <>
    <div>
      <ImageAvatars/>
    </div>
    <div>
      <RenderName/>
      <BasicButtonGroup buttonOne="About Me" buttonTwo="My Github" buttonThree="Other Projects"/>
      <p>Please select a destination from above.</p>
    </div>
    <Outlet/>
    </>
  );
}

export default App
