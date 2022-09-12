import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Hero {
  name: string;
  superheroName: string;
  id: number;
  superpowers: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
