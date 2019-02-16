import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
const routes: Routes = [
    {
        path: 'news/add',
        component: AddNewsComponent
    },
    {
        path: 'news/edit/:id',
        component: EditNewsComponent,
    },
    {
        path: 'news/read/:id',
        component: ReadMoreComponent,
    },
    {
        path: 'news',
        component: NewsComponent,
    }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class NewsRoutingModule { }