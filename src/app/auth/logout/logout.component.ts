import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})

export class LogoutComponent implements OnInit {

    constructor(private _router: Router,
        private _authService: AuthenticationService) {
    }

    ngOnInit(): void {
        this._authService.logout();
        this._router.navigate(['login']);
    }
}