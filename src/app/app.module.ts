import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './core/services/hero.service';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { PlusSuperpowerComponent } from './components/plus-superpower/plus-superpower.component';
import { SuperpowerService } from './core/services';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroItemComponent, PlusSuperpowerComponent, HeaderComponent, ],
  imports: [BrowserModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [HeroService, SuperpowerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
