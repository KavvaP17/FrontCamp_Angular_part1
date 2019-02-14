import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private configService: ConfigService) { }

  getData(channel, recordCount) {
    const url = this.getUrl(channel, recordCount);
    return fetch(url)
      .then(response => response.json())
      .then(result => result.articles);
  }

  private getUrl(channel, recordCount) {
    return `${this.configService.newsApi.url}sources=${channel}&pageSize=${recordCount}&apiKey=${this.configService.newsApi.apiKey}`;
  }
  
}
