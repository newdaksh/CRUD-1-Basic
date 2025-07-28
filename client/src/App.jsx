import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './Users'
import CreateUsers from './CreateUsers'
import UpdateUsers from './UpdateUsers'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
