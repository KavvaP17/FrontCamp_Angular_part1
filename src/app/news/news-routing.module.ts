import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { EditNewsComponent } from './components/edit-news/edit-course.component';
const routes: Routes = [
    {
        path: 'news/add',
        component: AddNewsComponent
    },
    {
        path: 'news/edit',
        component: EditNewsComponent,
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