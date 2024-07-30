import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { MatCardModule } from '@angular/material/card';
import { EmpleadosService } from '@services/empleados.service';
import { Empleado } from '@models/empleados.interface';
import { MatTableModule } from '@angular/material/table';

const MATERIALS_MODULES = [TableComponent, MatCardModule,MatTableModule];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MATERIALS_MODULES],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
})
export class ListadoComponent {
  private readonly empleadoSrv = inject(EmpleadosService);
  empleados = this.empleadoSrv.empleados;

  // Agrega un método para convertir el objeto a JSON
  get empleadosJson(): string {
    return JSON.stringify(this.empleados, null, 2);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
}
