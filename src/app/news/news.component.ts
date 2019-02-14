import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './services/news-api/news-api.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  source = 'News source';
  newsList = [];

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
  }

  changedChannel(channel) {
    this.source = channel.label;
    this.newsApiService.getData(channel.value, 5).then(newsList => {
      this.newsList = newsList;
      console.log(newsList);
    })

  }

}
