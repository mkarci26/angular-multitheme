import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit{
	ngOnInit(){
		console.log('once');
	}
}
