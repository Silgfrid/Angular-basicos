import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

    <h3>La base es: <strong>{{ base}}</strong> </h3>

    <button (click)="acumular(base)"> {{base}}</button>
    <samp> {{ numero }} </samp>
    <button (click)="acumular(-base)">- {{base}}</button>
    
    `
})

export class contadorComponent{
    title: string = 'Contador app';
    numero: number = 10;
    base: number  = 5;
  
  
    acumular( valor: number ){
      this.numero += valor;
    }

}