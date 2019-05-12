import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  selectedNote: Note;
  notes: Note[];
  readonly URL_API = 'http://localhost:3000/api/notes/';

  constructor(private http: HttpClient) {
    this.selectedNote = new Note();
   }

  getNotes() {
    return this.http.get(this.URL_API);
  }

  postNote(Note: Note) {
    return this.http.post(this.URL_API + 'add', Note);
  }

  putNote(note: Note) {
    return this.http.put(this.URL_API + `edit/${note._id}`, note)
  }

  deleteNote(_id: string) {
    return this.http.delete(this.URL_API + `remove/${_id}`)
  }
}


