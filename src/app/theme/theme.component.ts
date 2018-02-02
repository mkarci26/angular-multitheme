import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
	styleUrls:['./layout1/layout1.css'],
	encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit{
	theme:string = "layout1";
	ngOnInit(){
		
	}
}
