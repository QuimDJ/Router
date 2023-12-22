import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'

interface level { num: number, name: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent  {
  levelNum: number = 0;
  
  levels: level[] = [
      {num: 0, name: "AA"},
      {num: 1, name: "BB"}
  ];

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  selectedLevel = this.levels[0];

  selectedLevelCustomCompare = {num: 1, name: "BB"}

  compareFn(a:any, b:any) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }
}
