export class TaskDTO {

  constructor(data:Partial<TaskDTO>) {
    Object.assign(this, data);
  }

  id?: number|null;
  name?: string|null;

}
