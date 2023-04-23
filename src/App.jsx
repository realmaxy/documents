import Landing from './components/Landing/Landing'
import { Route, Routes, Link } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Messages from './components/Messages/Messages'
import Notifications from './components/Notifications/Notifications'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/documents' element={<Landing/>}/>
        <Route path='/documents/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
