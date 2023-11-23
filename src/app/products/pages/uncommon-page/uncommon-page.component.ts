import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nselect
  public name:string ='David'
  public gender: 'male'|'female'='male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[]=[
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia'
  ]
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //async pipe
  //crea un observablo que emite valores cada intervalo de tiempo
  //un observable no emite información hasta que no haya nadie suscrito a el
  public myObserbableTimer = interval(2000)
    .pipe(
      tap( value => console.log(value))
    )

    public promiseValue: Promise<string> = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa.')
      }, 3500)
    })
}
