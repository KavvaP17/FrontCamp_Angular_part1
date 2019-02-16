import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public currentNews;

  constructor(private configService: ConfigService,
              private loadingService: LoadingService) { }

  private mockLocalNews = [
    {
      author: "Local News",
      content: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",      
      description: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      publishedAt: "2019-02-16T12:22:26Z",
      source: {
        id: "local-news",
        name: "Local News"
      },
      title: "Ligue du LOL: Secret boys’ club cyber-bullying shakes French media",
      url: "https://www.bbc.co.uk/news/av/world-europe-47261306/ligue-du-lol-secret-boys-club-cyber-bullying-shakes-french-media",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F5CF/production/_105672926_p0712hyg.jpg"
    },
    {
      author: "Local News",
      content: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      description: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      publishedAt: "2019-02-16T12:22:26Z",
      source: {
        id: "local-news",
        name: "Local News"
      },
      title: "Ligue du LOL: Secret boys’ club cyber-bullying shakes French media",
      url: "https://www.bbc.co.uk/news/av/world-europe-47261306/ligue-du-lol-secret-boys-club-cyber-bullying-shakes-french-media",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F5CF/production/_105672926_p0712hyg.jpg"
    },
    {
      author: "Local News",
      content: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      description: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      publishedAt: "2019-02-16T12:22:26Z",
      source: {
        id: "local-news",
        name: "Local News"
      },
      title: "Ligue du LOL: Secret boys’ club cyber-bullying shakes French media",
      url: "https://www.bbc.co.uk/news/av/world-europe-47261306/ligue-du-lol-secret-boys-club-cyber-bullying-shakes-french-media",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F5CF/production/_105672926_p0712hyg.jpg"
    },
    {
      author: "Local News",
      content: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      description: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      publishedAt: "2019-02-16T12:22:26Z",
      source: {
        id: "local-news",
        name: "Local News"
      },
      title: "Ligue du LOL: Secret boys’ club cyber-bullying shakes French media",
      url: "https://www.bbc.co.uk/news/av/world-europe-47261306/ligue-du-lol-secret-boys-club-cyber-bullying-shakes-french-media",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F5CF/production/_105672926_p0712hyg.jpg"
    },
    {
      author: "Local News",
      content: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media. Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",      
      description: "Léa Lejeune was cyber-bullied by a group known as Ligue du LOL in a scandal that has shaken French media.",
      publishedAt: "2019-02-16T12:22:26Z",
      source: {
        id: "local-news",
        name: "Local News"
      },
      title: "Ligue du LOL: Secret boys’ club cyber-bullying shakes French media",
      url: "https://www.bbc.co.uk/news/av/world-europe-47261306/ligue-du-lol-secret-boys-club-cyber-bullying-shakes-french-media",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F5CF/production/_105672926_p0712hyg.jpg"
    }
  ];

  getData(channel, recordCount) {
    this.loadingService.setIsLoadingValue(false);
    switch(channel) {
      case 'local-news':
        this.currentNews = this.mockLocalNews;
        this.loadingService.setIsLoadingValue(true);
        return Promise.resolve(this.mockLocalNews);
      default: 
        const url = this.getUrl(channel, recordCount);
        return fetch(url)
          .then(response => response.json())
          .then(result => {
            this.currentNews = result.articles;
            this.loadingService.setIsLoadingValue(true);
            return result.articles;
          });
    }
  }

  getNewsById(id) {
    return this.currentNews[id];
  }

  private getUrl(channel, recordCount) {
    return `${this.configService.newsApi.url}sources=${channel}&pageSize=${recordCount}&apiKey=${this.configService.newsApi.apiKey}`;
  }
  
}
