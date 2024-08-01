import { Component, inject, input, OnInit, viewChild, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmpleadosService } from '@services/empleados.service';
import { Empleado } from '@models/empleados.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
const MATERIAL_MODULES = [MatPaginatorModule, MatTableModule,MatSortModule,MatInputModule,MatFormFieldModule];

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
  private readonly _sort = viewChild.required<MatSort>(MatSort); // se declara privada
private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
