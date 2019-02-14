import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditNewsComponent implements OnInit, OnDestroy {

  public editNewsForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.editNewsForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.maxLength(500)],
      date: [''],
      duration: [0],
      authors: [[]]
    });
  }

  cancel() {
    this.router.navigate(['news']);
  }

  save() {
    this.router.navigate(['news']);
  }

  ngOnDestroy() {}

}
