import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { TaskDTO } from 'app/task/task.model';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  http = inject(HttpClient);
  resourcePath = environment.apiPath + '/api/tasks';

  getAllTasks() {
    return this.http.get<TaskDTO[]>(this.resourcePath);
  }

  getTask(id: number) {
    return this.http.get<TaskDTO>(this.resourcePath + '/' + id);
  }

  createTask(taskDTO: TaskDTO) {
    return this.http.post<number>(this.resourcePath, taskDTO);
  }

  updateTask(id: number, taskDTO: TaskDTO) {
    return this.http.put<number>(this.resourcePath + '/' + id, taskDTO);
  }

  deleteTask(id: number) {
    return this.http.delete(this.resourcePath + '/' + id);
  }

}
