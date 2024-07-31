import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EmpleadosService } from '@services/empleados.service';
import { Empleado } from '@models/empleados.interface';

const MATERIAL_MODULES = [MatTableModule];

@Component({
  selector: 'app-Table-component',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  private readonly empleadoSrv = inject(EmpleadosService);
  listarEmpleados = this.empleadoSrv.empleados;

  displayedColumns: string[] = ['id', 'Apellido', 'Nombre', 'edad', 'DNI'];
  dataSource = this.listarEmpleados;
}
