import { Routes } from '@angular/router';

// ui
import { AppEstudiosComponent } from './Estudios/Estudios.component';
import { AppHistorialComponent } from './Historial/Historial.component';
import { AppConductaComponent } from './Conducta/Conducta.component';
import { AppHorarioComponent } from './Horario/Horario.component';
import { AppCalificacionesComponent } from './Calificaciones/Calificaciones.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Estudios',
        component: AppEstudiosComponent,
      },
      {
        path: 'Historial',
        component: AppHistorialComponent,
      },
      {
        path: 'Conducta',
        component: AppConductaComponent,
      },
      {
        path: 'Horario',
        component: AppHorarioComponent,
      },
      {
        path: 'Calificaciones',
        component: AppCalificacionesComponent,
      },
    ],
  },
];
