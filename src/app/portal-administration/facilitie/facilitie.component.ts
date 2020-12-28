import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facilitie',
  templateUrl: './facilitie.component.html',
  styleUrls: ['./facilitie.component.css']
})
export class FacilitieComponent implements OnInit {
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
