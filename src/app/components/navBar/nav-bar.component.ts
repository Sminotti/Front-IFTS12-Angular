import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
const MATERIAL_MODULES=[MatIconModule, MatButtonModule,MatToolbarModule,RouterLink]

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  onNewRegisterEvent = output<void>();
  clickRegistrar():void{
    this.onNewRegisterEvent.emit();
  }
}
