import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { ThemeComponent } from './theme.component';

export const ThemeRoutes: Routes = [{
    path: '', component: ThemeComponent, 'canActivate': [AuthGuard],
    'children': [
        { path: 'index', loadChildren: '../pages/dashboard/dashboard.module#DashboardModule' },
        { path: 'sales', loadChildren: '../pages/sales/sales.module#SalesModule' },
		
		
		
		
		
		
		
        { path: '', redirectTo: 'index', pathMatch: 'full' },
    ],
}
];
