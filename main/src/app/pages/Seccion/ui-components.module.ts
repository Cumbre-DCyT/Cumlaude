import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppEstudiosComponent } from './Estudios/Estudios.component';
import { AppHistorialComponent } from './Historial/Historial.component';
import { AppConductaComponent } from './Conducta/Conducta.component';
import { AppHorarioComponent } from './Horario/Horario.component';
import { AppCalificacionesComponent } from './Calificaciones/Calificaciones.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppEstudiosComponent,
    AppHistorialComponent,
    AppConductaComponent,
    AppHorarioComponent,
    AppCalificacionesComponent,
  ],
})
export class UicomponentsModule {}
