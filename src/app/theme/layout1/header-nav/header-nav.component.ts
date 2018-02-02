import { Component, AfterViewInit, ViewChild, HostListener, ElementRef } from '@angular/core';

declare let mLayout: any;
@Component({
    selector: "layout1-app-header-nav",
    templateUrl: "./header-nav.component.html",
	styleUrls:['./header.css'],
})
export class HeaderNavComponent implements AfterViewInit {

    isNavCollapsed:boolean = false;
	
	@ViewChild('headerPanel') parentDiv:ElementRef;
	@HostListener('window:resize') onResize() {
		this.collapsible();
	}
	constructor() { 

	}
	ngAfterViewInit() {
        setTimeout(() => {
			this.collapsible();
		});
	}
	private collapsible(){
		if(this.parentDiv && this.parentDiv.nativeElement && this.parentDiv.nativeElement.clientWidth <= 800 ) {
			this.isNavCollapsed = true;
		}else {
			this.isNavCollapsed = false;
		}
	}

}