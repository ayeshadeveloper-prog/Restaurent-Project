import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './add-todo/Add-Todo'
import AllTodo from './all-todo/All-Todo'

const Dashboard = () => {
    return (
      <Routes>
        <Route path='addTodo' element={<AddTodo />} />
        <Route path='allTodo' element={<AllTodo />} />
      </Routes>
    )
}

export default Dashboard

