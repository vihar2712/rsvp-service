import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { RsvpService } from './components/RsvpService'
import { Form } from './components/Form'

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>}/>
      <Route path='/rsvp-service' element={<RsvpService/>}/>
      <Route path='/update-status/:playerId' element={<Form label="Edit"/>}/>
      <Route path='/add-player' element={<Form label="Add"/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default App
