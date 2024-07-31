import { Component, inject } from '@angular/core';
import { TableComponent } from '@components/table/table.component';
import { EmpleadosService } from '@services/empleados.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
})
export class ListadoComponent {
  private readonly empleadoSrv = inject(EmpleadosService);
  listarEmpleados = this.empleadoSrv.empleados;

  // Agrega un método para convertir el objeto a JSON
  get empleadosJson(): string {
    return JSON.stringify(this.listarEmpleados, null, 2);
  }
}
