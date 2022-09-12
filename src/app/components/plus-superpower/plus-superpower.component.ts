import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero, Superpower } from 'src/app/core/interfaces';
import { HeroService, SuperpowerService } from 'src/app/core/services';



@Component({
  selector: 'app-plus-superpower',
  templateUrl: './plus-superpower.component.html',
  styleUrls: ['./plus-superpower.component.css']
})
export class PlusSuperpowerComponent implements OnInit {
 openModal: boolean;
 @Input() superpowers: Superpower[];
 @Input() hero: Hero;
 missingPowers: Superpower[];
 selectedValues: number[] = [];
 @Output() updatedHero : EventEmitter<Hero> = new EventEmitter();

  constructor(private heroservice: HeroService, private superpowerservice:SuperpowerService) {}
    

  ngOnInit(): void {
    this.openModal = false;

    this.getAllSuperPowers();
  }

  getAllSuperPowers() {
    this.superpowerservice.getSuperpowers().subscribe((data) => (this.superpowers = data));
  }

  onClick(): void {    
    this.missingPowers = this.superpowers.filter((power) => !this.hero.superpowerIds.includes(power.id));
    this.missingPowers.length === 0 ? this.openModal = false : this.openModal = true;
  }

  addPowers() {
    const payload = { 
      superpowerIds: this.hero.superpowerIds.concat(this.selectedValues)
    }
   this.heroservice.updateHero(payload,this.hero.id).subscribe((updatedHero: Hero) => {
      this.hero = updatedHero;
      this.sendData();
   });
   this.close();
  }

  sendData() {
    this.updatedHero.emit(this.hero);
  }

  close() {
    this.openModal = false;
  }
}
