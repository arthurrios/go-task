import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-session',
  imports: [],
  templateUrl: './welcome-session.component.html',
  styleUrl: './welcome-session.component.css'
})
export class WelcomeSessionComponent {
  private readonly _modalControllerService = inject(ModalControllerService)
  private readonly _taskService = inject(TaskService)

  openNewTaskModal() {
    const dialogRef = this._modalControllerService.openNewTaskModal()

    dialogRef.closed.subscribe((taskForm) => {
      console.log('Created task: ', taskForm)
      if (taskForm) {
        this._taskService.addTask(taskForm)
      }
    })
  }
}
