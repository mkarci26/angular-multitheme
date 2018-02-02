import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';
import { SalesRoutes } from './sales.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, NgbModule,
        RouterModule.forChild(SalesRoutes),
    ],
    declarations: [SalesComponent]
})

export class SalesModule { }
