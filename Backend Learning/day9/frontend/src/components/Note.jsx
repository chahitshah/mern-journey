import React from 'react'
import "./note.css"

const Note = ({title,desc,onDelete,onEdit}) => {
  return (
    <div className="notes">
      <div className="content">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="modification">
        <button onClick={onDelete} className="deletebutton">
          <i className="ri-delete-bin-6-line"></i>
        </button>
        <button onClick={onEdit} className="editbutton">
          <i className="ri-pencil-line"></i>
        </button>
      </div>
    </div>
  )
}

export default Note
