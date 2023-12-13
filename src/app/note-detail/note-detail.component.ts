import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find(note => note.id === this.id);
  index = NOTES.findIndex(note => note.id === this.id);
  router = inject(Router);

  deleteNote() {
    NOTES.splice(this.index, 1);
    this.router.navigateByUrl('');
  }
}
