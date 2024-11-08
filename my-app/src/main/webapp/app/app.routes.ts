import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskAddComponent } from './task/task-add.component';
import { TaskEditComponent } from './task/task-edit.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: $localize`:@@home.index.headline:Welcome to your new app!`
  },
  {
    path: 'tasks',
    component: TaskListComponent,
    title: $localize`:@@task.list.headline:Tasks`
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent,
    title: $localize`:@@task.add.headline:Add Task`
  },
  {
    path: 'tasks/edit/:id',
    component: TaskEditComponent,
    title: $localize`:@@task.edit.headline:Edit Task`
  },
  {
    path: 'error',
    component: ErrorComponent,
    title: $localize`:@@error.headline:Error`
  },
  {
    path: '**',
    component: ErrorComponent,
    title: $localize`:@@notFound.headline:Page not found`
  }
];
