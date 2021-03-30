import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  hidePassword: boolean = true;
  hidePasswordRepeat: boolean = true;
  ngOnInit(): void {}
}
