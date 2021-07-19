import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title: string = "header titulo"

  constructor() { }

  ngOnInit(): void {
    console.log("when component header load");
  }

  toggleAddTask(){
    console.log("toggle");
  }

}
