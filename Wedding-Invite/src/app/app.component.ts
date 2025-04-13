import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  groomMotherName = environment.groomMotherName;
  groomFatherName = environment.groomFatherName;
  groomName = environment.groomName;
  brideMotherName = environment.brideMotherName;
  brideFatherName = environment.brideFatherName;
  brideName = environment.brideName;
  elderOrYounger = environment.elderOrYounger;
  sonOrDaughter = environment.sonOrDaughter;
  marrigaeDate = environment.marrigaeDate;
  location = environment.location;
}
