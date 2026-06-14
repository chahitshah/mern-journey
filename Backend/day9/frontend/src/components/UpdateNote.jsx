import React from 'react'
import "./addnote.css"

const UpdateNote = ({ isOpen, note, onClose, onSubmit }) => {
  return (
    <div className={`addnote-wrapper ${isOpen ? "show" : ""}`}>
      <form className="detail" onSubmit={onSubmit}>
        <button className="closebutton" type="button" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>
        <h1>Update Note</h1>
        <textarea
          name="description"
          placeholder="Enter new description"
          defaultValue={note?.description || ""}
          required
        ></textarea>
        <button type="submit">Update Note</button>
      </form>
    </div>
  )
}

export default UpdateNote
