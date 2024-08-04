export type ColumnsKey <T> = Array<keyof T>;


export interface Empleado {
    idPersona: number;
    nombre: Text;
    apellido: Text;
    edad: Text;
    dni: Text;
    action:Text;

}