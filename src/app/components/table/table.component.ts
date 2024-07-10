import { AfterViewInit, Component, input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

const MATERIALS_MODULES = [MatTableModule, MatPaginatorModule];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MATERIALS_MODULES],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> {
  /* se recibe el nombre de las columnas desde el mismo componente
  -------------------------------------------------------------------------------------- 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
   ------------------------------------------------------------------------------------*/
  /* de esta forma se recibe del componente padre del que se utilice*/
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  
  dataSource = new MatTableDataSource<T>();
}
