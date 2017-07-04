import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';

@Component({
    selector: 'app-unauthorized',
    templateUrl: 'unauthorized.component.html'
})

export class UnauthorizedComponent implements OnInit {

    public message: string;

    constructor(private adalService: AdalService) {
        this.message = 'Hello from UnauthorizedComponent';
    }

    ngOnInit(): void {
    }
    public logIn() {
        this.adalService.login();
    }
    public logOut() {
        this.adalService.logOut();
    }
}