import { Component } from '@angular/core';
import { WelcomeSessionComponent } from "../welcome-session/welcome-session.component";

@Component({
  selector: 'app-main-content',
  imports: [WelcomeSessionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
