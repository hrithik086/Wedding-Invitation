import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(private router:Router) {}

  groomMotherName = environment.groomMotherName;
  groomFatherName = environment.groomFatherName;
  groomName = environment.groomName;
  brideMotherName = environment.brideMotherName;
  brideFatherName = environment.brideFatherName;
  brideName = environment.brideName;
  elderOrYounger = environment.elderOrYounger;
  sonOrDaughter = environment.sonOrDaughter;
  marriageDate:Date = new Date(environment.marriageDate);
  marriageLocation = environment.marriageLocation;
  marriageLocationLink = environment.marriageLocationLink;
  receptionDate = new Date(environment.receptionDate);
  receptionLocation = environment.receptionLocation;
  receptionLocationLink = environment.receptionLocationLink;

  openMarriageLocationLink() {
    window.open(this.marriageLocationLink, '_blank');
  }

  openReceptionLocationLink() {
    window.open(this.receptionLocationLink, '_blank');
  }
}
