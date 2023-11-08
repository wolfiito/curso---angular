import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHeroe( name:string ):void{
    this.name = name;
  }

  changeAge( age:number ):void{
    this.age = age;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
