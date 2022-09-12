import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Hero, Superpower } from 'src/app/core/interfaces';
import { HeroService, SuperpowerService } from 'src/app/core/services';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent implements OnInit {
  @Input()
  hero: Hero;

  @Input()
  formHero: FormGroup;

  @Input()
  set allSuperpowers(data: Superpower[]) {
    if (data) {
      // this.superpowers = data.filter((superpower) =>
      //   this.hero.superpowerIds.includes(superpower.id)
      // );
    }
  }

  // @Input()
  // allSuperpowers: Superpower[];

  superpowers: Superpower[];
  // faTrash = faTrash;


  constructor(private superpowerService: SuperpowerService, private heroservice: HeroService) {}

  getSuperpowers() : void {
    if(this.hero.superpowerIds.length) {
      this.superpowerService
      .getSuperpowersByIds(this.hero.superpowerIds)
      .subscribe((data) => (this.superpowers = data));
}
 else {
  this.superpowers = [];
 }
  }

  ngOnInit(): void {
   this.getSuperpowers();
   
  }

  removePower(superpowerId: number): void {
    const payload = { 
      superpowerIds: this.hero.superpowerIds.filter((id)=>id != superpowerId)
    }
   this.heroservice.updateHero(payload,this.hero.id).subscribe((updatedHero: Hero) => {
    this.formHero  
    this.hero = updatedHero;
      this.getSuperpowers();
   });
  }

  receiveData(event: Hero) {
    this.hero = event;
    this.getSuperpowers();

  }


  // ngAfterViewInit(): void {
  //   this.superpowers = this.allSuperpowers.filter((superpower) =>
  //     this.hero.superpowerIds.includes(superpower.id)
  //   );
  // }
}
