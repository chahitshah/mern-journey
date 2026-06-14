import React from 'react'
import "./addnote.css"

const Addnote = ({ isOpen, onClose, onSubmit }) => {
  return (
    <div className={`addnote-wrapper ${isOpen ? "show" : ""}`}>
      <form className="detail" onSubmit={onSubmit}>
        <button className="closebutton" type="button" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>
        <h1>Create Note</h1>
        <input name="title" placeholder="Enter title" type="text" required />
        <textarea name="description" placeholder="Enter description" required></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
