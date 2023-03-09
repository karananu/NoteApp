import { useState } from 'react'
import Header from './components/Header'
import Note from './components/Note'
import CreatNotes from './components/CreatNotes'
import './App.css'
function App() {
  const [notes, createNotes] = useState([])

  function addNote(newNote) {
    createNotes((oldNotes) => {
      return [...oldNotes, newNote]
    })
  }
  function removeNote(id) {
    createNotes((oldNotes) => {
      return oldNotes.filter((noteContent, serial) => {
        return serial !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreatNotes add={addNote} />
      {notes.map((noteContent, serial) => {
        return (
          <Note
            key={serial}
            id={serial}
            heading={noteContent.heading}
            text={noteContent.text}
            onDelete={removeNote}
          />
        )
      })}
    </div>
  )
}

export default App
