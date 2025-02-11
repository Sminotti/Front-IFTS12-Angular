import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Empleado } from '@models/empleados.interface';
import { environment } from 'envairoments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  public empleados = signal<Empleado[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  public getEmpleados(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(
      `${this._endPoint}/Api/empleados.php`
    );
    /*    .pipe(tap((data: Empleado[]) => this.empleados.set(data)))
      .subscribe();*/
  }
  public getEmpleadosById(id: number) {
    return this._http.get<Empleado>(
      `${this._endPoint}/Api/empleados.php/${id}`
    );
  }

  public eliminarEmpleado(id:number){
    return this._http.get<Empleado>(
      `${this._endPoint}/Api/empleados.php/${id}/del`
    );
  }

  constructor() {
    this.getEmpleados();
  }
}
