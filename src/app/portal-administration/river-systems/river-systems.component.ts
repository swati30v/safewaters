import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-river-systems',
  templateUrl: './river-systems.component.html',
  styleUrls: ['./river-systems.component.css']
})
export class RiverSystemsComponent implements OnInit {
	closeResult: string;
  	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'md'  });
	}
	
  	ngOnInit() {  }
}
