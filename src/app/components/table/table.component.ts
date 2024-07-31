import { Component, inject, input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmpleadosService } from '@services/empleados.service';
import { Empleado } from '@models/empleados.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
const MATERIAL_MODULES = [MatPaginatorModule, MatTableModule];

@Component({
  selector: 'app-Table-component',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit {
  // aca recivo los encabezados de las columnas y la data del componente padre
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();

  dataSource = new MatTableDataSource<T>();

  ngOnInit(): void {
    this.dataSource.data = this.data();
  }
}
