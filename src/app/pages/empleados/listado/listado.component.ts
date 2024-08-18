import { Component, inject } from '@angular/core';
import { TableComponent } from '@components/table/table.component';
import { ColumnsKey, Empleado } from '@models/empleados.interface';
import { EmpleadosService } from '@services/empleados.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
})
export class ListadoComponent {
  displayedColumns: ColumnsKey<Empleado> = [
    'idPersona',
    'apellido',
    'nombre',
    'edad',
    'dni',
    'action',
  ];
  sortables: ColumnsKey<Empleado> = [
    'idPersona',
    'apellido',
    'nombre',
    'edad',
    'dni',
  ];
  data!: Empleado[];
  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((empleados: Empleado[]) => {
      this.data = empleados;
    });
  }
}
