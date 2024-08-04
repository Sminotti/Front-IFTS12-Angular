import { EmpleadosService } from '@services/empleados.service';
import { Empleado } from '@models/empleados.interface';

import {
  Component,
  effect,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { FilterComponent } from '../filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
const MATERIAL_MODULES = [
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
];

@Component({
  selector: 'app-Table-component',
  standalone: true,
  imports: [MATERIAL_MODULES, FilterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit {
  // aca recivo los encabezados de las columnas y la data del componente padre
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns= input<string[]>();

  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort); // se declara privada
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);

  constructor() {
    // capturamos el valor de la busqueda
    effect(
      () => {
        if (this.valueToFilter()) {
          this.dataSource.filter = this.valueToFilter();
        }
      },
      { allowSignalWrites: true } //sobreescribimos
    );
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();

    

  }
}
