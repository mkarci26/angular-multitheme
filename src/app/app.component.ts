import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'body',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'app';

    loaded: boolean = false;

    constructor(private _router: Router) {

    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.loaded = true;
        });
    }
}