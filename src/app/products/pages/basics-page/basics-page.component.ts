import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = 'david';
    public nameUpper: string = 'DAVID';
    public fullName: string = 'dAvId cHiLaTRa';
    public customDate: Date = new Date();
}
