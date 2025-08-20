import { Component } from '@angular/core';
import { WelcomeSessionComponent } from "../welcome-session/welcome-session.component";
import { TaskListSectionComponent } from "../task-list-section/task-list-section.component";

@Component({
  selector: 'app-main-content',
  imports: [WelcomeSessionComponent, TaskListSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
