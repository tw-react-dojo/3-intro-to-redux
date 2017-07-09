import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'

let TodoList = () => (
  <div className="row">
    <ul className="list-group">
      <Todo text="Buy milk" completed onClick={() => {}} />
      <Todo text="Drink milk" completed={false} onClick={() => {}} />
      <Todo text="Throw away the bottle" completed={false} onClick={() => {}} />
    </ul>
  </div>
)

TodoList = connect()(TodoList)

export default TodoList
