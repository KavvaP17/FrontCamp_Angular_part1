import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    newsApi = {
      apiKey :  '5682c3e724464abcbc6f267ef4ec3389',
      url : 'https://newsapi.org/v2/everything?',
      channels : [
        {
            label: 'ABC NEWS',
            value: 'abc-news'
        },
        {
            label: 'BBC NEWS',
            value: 'bbc-news'
        },
        {
            label: 'BBC SPORT',
            value: 'bbc-sport'
        },
        {
            label: 'FOX NEWS',
            value: 'fox-news'
        },
        {
            label: 'FOX SPORTS',
            value: 'fox-sports'
        },
        {
            label: 'GOOGLE NEWS',
            value: 'google-news'
        },
      ]
    }
  
  constructor() { }

}
