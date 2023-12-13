import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });

  router = inject(Router);

  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let newNote = {
        id: Number(new Date()),
        title: title,
        text: text,
      };
      NOTES.unshift(newNote);
      this.addNoteForm.reset();
    }

    this.router.navigateByUrl('/');
  }
}
