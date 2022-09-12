import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero, Superpower } from 'src/app/core/interfaces';
import { HeroService, SuperpowerService } from 'src/app/core/services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  allSuperpowers: Superpower[];

  constructor(
    private heroService: HeroService,
    private superpowerService: SuperpowerService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.superpowerService
      .getSuperpowers()
      .subscribe((data) => (this.allSuperpowers = data));
  }
}
 