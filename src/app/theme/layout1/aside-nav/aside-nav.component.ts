import { Component, AfterViewInit, ViewChild, HostListener, ElementRef, OnInit  } from '@angular/core';
import { UserService } from "./../../../auth/_services/user.service";
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
    selector: "layout1-app-aside-nav",
    templateUrl: "./aside-nav.component.html",
	styleUrls:['./aside-nav.css'],
})
export class AsideNavComponent implements AfterViewInit  {
	isMenuCollapsed:boolean = false;
	currentUser: any;
    menuData: any;
	parentState:string;
	childState:string;
	
	@ViewChild('asidePanel') parentDiv:ElementRef;
	@HostListener('window:resize') onResize() {
		this.collapsible();
	}
	constructor(private router: Router, private _userService: UserService) { 

	}
	ngAfterViewInit() {
        setTimeout(() => {
			this.collapsible();
		});
	}
	
	ngOnInit(){
		let urls = (this.router.url) ? this.router.url.split('/') : ['',''];
		this.parentState = urls[1];
		this.childState = urls[2];
		
		this.currentUser = this._userService.getCurrentUser();
		
		this._userService.getMenu().subscribe(response => {
			this.menuData = response.filter(item => {
				return item.groups.find(x => x == this.currentUser.group_id);
			});
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