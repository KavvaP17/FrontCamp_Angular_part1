import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: NewsItem;
  @Input() id: number;
  @Output() onDeleteNews = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

      public delete(event) {
        event.stopPropagation();
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '235px',
          data: {title: 'news'}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.onDeleteNews.emit('mock data');
          }
        });
      }

}

export interface NewsItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}
