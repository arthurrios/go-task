import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // Todo tasks
  private todoTasks$ = new BehaviorSubject<ITask[]>([])
  readonly todoTasks = this.todoTasks$.asObservable()

  // In progress tasks
  private inProgressTasks$ = new BehaviorSubject<ITask[]>([])
  readonly inProgressTasks = this.inProgressTasks$.asObservable()

  // Done tasks
  private doneTasks$ = new BehaviorSubject<ITask[]>([])
  readonly doneTasks = this.doneTasks$.asObservable()

  // Add a new task
}
