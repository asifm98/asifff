import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ToDoTask from './Components/ToDoTask'
import CRUD from './Components/CRUD'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' Component={ToDoTask}/>
        </Routes>
      </BrowserRouter> */}
      <CRUD />
    </div>
  )
}

export default App
