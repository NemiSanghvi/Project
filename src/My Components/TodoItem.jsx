import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>
        {todo.title}
      </h4>
      <p>
        {todo.desc}
      </p>
      <button className="btn btn-sm btn-danger my-2 " onClick={() => { onDelete(todo) }}>Delete</button> <br />
      {/* <button className="btn btm-sm btn-success bor" onClick={() => { onDone(todo) }}>Done</button> */}
    </div>
  )
}
