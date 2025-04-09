import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:8000";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const addNote = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const res = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const newNote = await res.json();
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const deleteNote = async (id) => {
    await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <h1>Notes App</h1>
      <form onSubmit={addNote} className="note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>

      <div className="notes-list">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
