import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navBar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  RouterOutlet,
  NavBarComponent,
  FooterComponent,
  TableComponent,
  MatCardModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MATERIAL_MODULES],
})
export class AppComponent {


  title = 'Proyecto clase IFTS12';
  onClickNewRegister(): void {
    console.log('Click en nuevo registro');
  }
}
