import { Component, OnInit , Input, Output} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() text!: String;
  @Input() color!: String;
  //@Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }



}
