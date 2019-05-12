import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service'
import { Note } from 'src/app/models/note';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [ NoteService ]
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  addNote(form: NgForm) {
    this.noteService.postNote(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Nota guardada!'})
      this.getNotes();
    });
  }

  getNotes() {
    this.noteService.getNotes()
    .subscribe(res => {
      this.noteService.notes = res as Note[];
      console.log(res);
    })
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.noteService.selectedNote = new Note();
    }
  }

}
