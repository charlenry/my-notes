import { Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const routes: Routes = [
  { 
    path: '', 
    title: "My Notes", 
    component: NotesListComponent,
  },
  { 
    path: 'new', 
    title: "Add a New Note", 
    component: AddNoteComponent,
  },
  { 
    path: 'note/:id', 
    title: "Note Detail", 
    component: NoteDetailComponent,
   },
];
