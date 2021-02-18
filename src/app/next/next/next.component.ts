import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../data-transfer.service';
import {User} from '../../models/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  user: User;
  u: User = {login: '', password: ''};

  constructor(private dataTransferService: DataTransferService) {
   this.user = this.dataTransferService.getUser();
  }

  ngOnInit(): void {
  }


  save(myForm: NgForm): void {
    this.dataTransferService.createUser(this.u);
    console.log(this.dataTransferService.getUser());
  }
}
