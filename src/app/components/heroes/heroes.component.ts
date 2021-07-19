import { Component, OnInit } from '@angular/core';
import { HeoresServices, Heroe } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes : Heroe[] = [];

  constructor(private _heroesServices : HeoresServices) {
    console.log("consutrctor");

  }

  ngOnInit(): void {
    console.log("iniciando ");
    this.heroes = this._heroesServices.getHeroes();
    console.log("heroes ",this.heroes);
  }

}
