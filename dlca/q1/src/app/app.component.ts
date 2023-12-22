import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { sp,en, cat} from "./idioma";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
  
export class AppComponent {

  levelNum:any;
  levels:Array<Object> = [
      {num: 0, name: "es"},
      {num: 1, name: "en"},
      {num: 2, name: "cat"}
  ];
  selectedLevel = this.levels[0];
  
  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
  

  idiomes = ["es", "en", "cat"];
  idiomaView = "es";
  idioma_seleccionat = cat;
  title = this.idioma_seleccionat.m1;
  subtitle = this.idioma_seleccionat.m2;

getIdioma() {
  console.log(this.idiomaView);
}


}
