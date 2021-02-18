import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  greten = '';

  @Output()
  emitX = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  save(greten: string): void {
    this.emitX.emit(greten);
  }
}
