import React from 'react'
import { connect } from 'react-redux'

let AddTodo = () => {
  let input
  return (
    <div className="row">
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          //dispatch add todo
          input.value = ''
        }}
      >
        <input
          className="form-control"
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className="btn btn-default">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
