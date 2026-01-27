import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  title:string = 'Angular from Scratch';
  name:string = 'Altaseb Chernet';

  conunt:number = 0;

  increment():number {
    this.conunt+=1;
    return this.conunt;
  }
  decrease():number {
    if (this.conunt <= 0) {
      return this.conunt;
    }
    this.conunt-=1;
    return this.conunt;
  }

  showMessage:boolean = true;
  fruitList:string[] = ['Apple', 'Banana', 'Mango', 'Orange'];

  isDisabled = true;

  username  = '';

theme = signal<'light' | 'dark'>('light');

  toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

}
