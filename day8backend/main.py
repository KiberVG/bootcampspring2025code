from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NoteIn(BaseModel):
    title: str
    content: str

class Note(NoteIn):
    id: str

# Initialize with sample notes
notes: List[Note] = [
    Note(id=str(uuid.uuid4()), title="Welcome!", content="This is your first note."),
    Note(id=str(uuid.uuid4()), title="To-Do", content="Try adding and deleting a note."),
    Note(id=str(uuid.uuid4()), title="Reminder", content="Drink water! 💧"),
]

@app.get("/notes", response_model=List[Note])
def get_notes():
    return notes

@app.post("/notes", response_model=Note)
def add_note(note_data: NoteIn):
    new_note = Note(id=str(uuid.uuid4()), title=note_data.title, content=note_data.content)
    notes.append(new_note)
    return new_note

@app.delete("/notes/{note_id}")
def delete_note(note_id: str):
    global notes
    updated = [n for n in notes if n.id != note_id] # list comprehension
    if len(updated) == len(notes): # could not delete
        raise HTTPException(status_code=404, detail="Note not found") # raise error or HTTPException
    notes[:] = updated # setting 'notes' to updated notes without the note
    return {"message": "Deleted"}
