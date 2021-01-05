import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	closeResult: string;
  	constructor(private modalService: NgbModal, private router: Router) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'md'  });
	}
	
	  ngOnInit() {  }
	  
	  logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this. router.navigate(['/login']);
    }

}
