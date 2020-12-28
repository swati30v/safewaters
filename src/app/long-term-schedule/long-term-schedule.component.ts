import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-long-term-schedule',
  templateUrl: './long-term-schedule.component.html',
  styleUrls: ['./long-term-schedule.component.css']
})
export class LongTermScheduleComponent implements OnInit {
	closeResult: string;
  	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'xl'  });
	}
	openfile(importfile) {
	    this.modalService.open(importfile, { centered: true});
	}
	
  	ngOnInit() {  }

}
