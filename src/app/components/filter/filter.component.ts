import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

const MATERIAL_MODULES = [MatInput, MatFormField, MatLabel, FormsModule];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-form-field class="mt-1,filtro-de-busqueda">
      <mat-label>{{ label() }}</mat-label>
      <input
        matInput
        type="text"
        [(ngModel)]="filter"
        placeholder="{{ placeholder() }}"
        #input
      />  
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Enter filter');
}
