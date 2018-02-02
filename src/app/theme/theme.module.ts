import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { ThemeRoutes } from './theme.routing';
import { Layout1Module } from './layout1/layout1.module';
import { Layout2Module } from './layout2/layout2.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ThemeRoutes),
        Layout1Module,
        Layout2Module
    ],
    declarations: [ThemeComponent]
})

export class ThemeModule { }
