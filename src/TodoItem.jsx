import React from 'react'
import './App.css'
import { FiEdit3 } from "react-icons/fi";
import { BsFillTrash3Fill } from "react-icons/bs";

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  return (
    <div className='todo-item'>
        
        <span className='todo-text'>{todo}</span>
        <div className="todo-buttons">
          <button className='todo-edit' onClick={editTodo}><FiEdit3 style={{ color: '#FFEFDE', backgroundColor: 'rgba(175, 130, 96, 0)', fontSize: '18px',  }} /></button>
          <button className='todo-remove' onClick={removeTodo}><BsFillTrash3Fill style={{ color: '#FFEFDE', backgroundColor: 'rgba(175, 130, 96, 0)', fontSize: '18px' }} /></button>
        </div>

    </div>
  )
}

export default TodoItem