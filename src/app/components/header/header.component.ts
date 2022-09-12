import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {Hero,Superpower} from 'src/app/core/interfaces';
import {HeroService,SuperpowerService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  formHero :FormGroup;
  formPower :FormGroup;

newHero: Partial<Hero>;

  constructor(private heroService: HeroService ,private superPowerService:SuperpowerService) {
    this.formHero =new FormGroup({
      realName :new FormControl('',[Validators.required, Validators.minLength(3)]),
      superheroName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      imageUrl : new FormControl('',[Validators.required, Validators.minLength(3)])
    });
    
    this.formPower =new FormGroup({
name :new FormControl(''),
icon :new FormControl('')
}
);
   }

  ngOnInit(): void {
  }

addHero(): void {
  const payload ={
realName :this.formHero.value['realName'],
superheroName:this.formHero.value['superheroName'],
imageUrl :this.formHero.value['imageUrl'],
superpowerIds : []

  }
  this.heroService.addHero(payload).subscribe((data) => console.log(data));
  
}
addSuperpower(): void {
this.superPowerService.addSuperpower(this.formPower.value['name'],this.formPower.value['icon']).subscribe((data)=> console.log(data));
}
}



