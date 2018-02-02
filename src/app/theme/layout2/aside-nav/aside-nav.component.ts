import { Component, AfterViewInit, ViewChild, HostListener, ElementRef  } from '@angular/core';

declare let mLayout: any;
@Component({
    selector: "layout2-app-aside-nav",
    templateUrl: "./aside-nav.component.html",
	styleUrls:['./aside-nav.css'],
})
export class AsideNavComponent implements AfterViewInit  {
	isMenuCollapsed:boolean = false;
	
	@ViewChild('asidePanel') parentDiv:ElementRef;
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
			this.isMenuCollapsed = true;
		}else {
			this.isMenuCollapsed = false;
		}
	}
}