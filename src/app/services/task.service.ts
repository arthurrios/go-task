import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ITask } from '../interfaces/task.interface';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // Todo tasks
  private todoTasks$ = new BehaviorSubject<ITask[]>([])
  readonly todoTasks = this.todoTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)))

  // In progress tasks
  private inProgressTasks$ = new BehaviorSubject<ITask[]>([])
  readonly inProgressTasks = this.inProgressTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)))

  // Done tasks
  private doneTasks$ = new BehaviorSubject<ITask[]>([])
  readonly doneTasks = this.doneTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)))

  // Add a new task
  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: []
    }

    const currentList = this.todoTasks$.value

    this.todoTasks$.next([...currentList, newTask])
  }

  loadUpdatedTaskList() {
    console.log('loadUpdatedTaskList: ', this.todoTasks$.value)
  }
}
