import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-permissions',
  templateUrl: './users-permissions.component.html',
  styleUrls: ['./users-permissions.component.css']
})
export class UsersPermissionsComponent implements OnInit {
	closeResult: string;
  	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'md'  });
	}
	deletefac(deletefaciliti) {
	    this.modalService.open(deletefaciliti, { centered: true});
	}
	
  	ngOnInit() {  }

}
