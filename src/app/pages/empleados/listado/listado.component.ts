import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { MatCardModule } from '@angular/material/card';
import { EmpleadosService } from '@services/empleados.service';

const MATERIALS_MODULES = [TableComponent,MatCardModule,TableComponent]



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

  
}
