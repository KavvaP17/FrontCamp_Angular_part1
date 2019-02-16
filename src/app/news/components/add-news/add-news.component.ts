import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit, OnDestroy {

  public newsForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.newsForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.maxLength(200)],
      content: ['', Validators.maxLength(500)],
      image: [''],
      date: [''],
      author: [''],
      url: ['']
    });
  }

  public close() {
    this.location.back();
  }

  public save() {
    this.router.navigate(['news']);
  }

  ngOnDestroy() {}

}
