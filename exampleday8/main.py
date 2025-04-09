from fastapi import FastAPI, Path, Query
from typing import Annotated
from pydantic import BaseModel, Field

app = FastAPI()

data = [{"title": "Me2", "content": "this is my content"},
        {"title": "Me2", "content": "this is my content"},
        {"title": "Me2", "content": "this is my content"},
        {"title": "Me2", "content": "this is my content"},
        {"title": "Me2", "content": "this is my content"},
        {"title": "Me2", "content": "this is my content"}]

class Note(BaseModel):
    title: str
    content: str = Field(min_length=2)
    
class NoteOut(BaseModel):
    id: str
    title: str
    content: str = Field(min_length=2)


@app.get("/notes/{name}")
def home(name: Annotated[str, Path(min_length=2)], limit: Annotated[int, Query(lt=6)]):
    ans = []
    for note in data:
        if len(ans) == limit:
            break
        if name == note['title']:
            ans.append(note)
            

    
    return {"result": ans}

@app.post('/notes/add')
def addNote(user_note: Note, response_model=NoteOut):
    
    # put the note in the database
    data.append({"title": user_note.title, "content":user_note.content})
    # this would actually the id of the note
    
    # you return the new note with the id attached back to the user
    new_note: NoteOut = {"title": user_note.title, "content":user_note.content, id: "erm"}
    
    return new_note
