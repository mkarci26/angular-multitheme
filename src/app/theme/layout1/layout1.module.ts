import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        CommonModule, NgbModule.forRoot(),RouterModule
    ],
    declarations: [HeaderNavComponent, AsideNavComponent, FooterComponent ],
    exports: [HeaderNavComponent, AsideNavComponent, FooterComponent ],
})

export class Layout1Module { }
