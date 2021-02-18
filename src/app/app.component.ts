import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './models/User';
import {DataTransferService} from './data-transfer.service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less9';
  moyaForma: FormGroup;
  login: FormControl;
  password: FormControl;

  user: User = {login: '', password: ''};

  constructor(private dataTransferService: DataTransferService) {
    this.login = new FormControl('req', Validators.required);
    this.password = new FormControl('qwerrt', [Validators.required]);
    this.moyaForma = new FormGroup({
      login : this.login,
      password : this.password
    });
  }

  save(moyaForma: FormGroup) {
    console.log(moyaForma);

    this.user.login = moyaForma.controls.login.value;
    this.user.password = moyaForma.controls.password.value;

    console.log(this.user);

    this.dataTransferService.createUser(this.user);
    console.log(this.dataTransferService.getUser());
  }

  outValue($event: string): void {
    this.title = $event;
  }
}
