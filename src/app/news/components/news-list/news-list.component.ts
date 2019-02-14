import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() newsList;

  constructor() { }

  ngOnInit() {
  }

  deleteNews(id) {
    console.log('News deleted');
  }

}
