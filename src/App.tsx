import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { RsvpService } from './components/RsvpService'
import { Form } from './components/Form'
import { Stats } from './components/Stats'

function App() {

  return (
    <Routes>
      <Route path='/' element={<RsvpService/>}/>
      <Route path='/update-status/:playerId' element={<Form label="Edit"/>}/>
      <Route path='/add-player' element={<Form label="Add"/>}/>
      <Route path='/stats' element={<Stats/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default App
