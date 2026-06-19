import { useEffect, useState } from 'react'
import Note from './components/Note'
import axios from "axios"
import Addnote from './components/Addnote';
import UpdateNote from './components/UpdateNote';

const App = () => {

  const [notes, setnotes] = useState([]);
  const [isAddnoteOpen, setIsAddnoteOpen] = useState(false);
  const [isUpdateNoteOpen, setIsUpdateNoteOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  function Fetchnote()
  {
    axios.get("https://mern-journey-57h8.onrender.com/api/notes")
      .then((res) => {
        setnotes(res.data.notes)
      })
  }



  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const title = formData.get("title")
    const description = formData.get("description")

    axios.post("https://mern-journey-57h8.onrender.com/api/notes", {
      title,
      description
    })
      .then(() => {
        e.target.reset()
        setIsAddnoteOpen(false)
        Fetchnote()
      })
  }

  function handelDelete(noteID)
  {
    axios.delete(`https://mern-journey-57h8.onrender.com/api/notes/${noteID}`)
     .then((res)=>{
      console.log(res.data)
      Fetchnote()
     })
  }

  function openUpdateNote(note) {
    setSelectedNote(note)
    setIsUpdateNoteOpen(true)
  }

  function handelUpdate(e) {
    e.preventDefault()

    if (!selectedNote) {
      return
    }

    const formData = new FormData(e.target)
    const description = formData.get("description")

    axios.patch(`https://mern-journey-57h8.onrender.com/api/notes/${selectedNote._id}`, {
      description
    })
    .then((res)=>{
      console.log(res.data)
      setIsUpdateNoteOpen(false)
      setSelectedNote(null)
      Fetchnote()
    })
  }

  useEffect(() => {
    Fetchnote()

  }, [])

  return (
    <main>
      <div className="navbar">
        <h1>Notes</h1>
        <button className="addnote" onClick={() => setIsAddnoteOpen(true)}>
          <i className="ri-add-large-line"></i>
        </button>
      </div>

      <Addnote
        isOpen={isAddnoteOpen}
        onClose={() => setIsAddnoteOpen(false)}
        onSubmit={handleSubmit}
      />

      <UpdateNote
        key={selectedNote?._id}
        isOpen={isUpdateNoteOpen}
        note={selectedNote}
        onClose={() => {
          setIsUpdateNoteOpen(false)
          setSelectedNote(null)
        }}
        onSubmit={handelUpdate}
      />

      <div className="notes-container">
        {notes.map((note,index)=>{
          return <Note key={index} title={note.title} desc={note.description} onDelete={()=>{handelDelete(note._id)}} onEdit={()=>{openUpdateNote(note)}} />
        })}
      </div>
    </main>
  )
}

export default App
