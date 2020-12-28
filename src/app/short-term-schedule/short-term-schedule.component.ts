import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-short-term-schedule',
  templateUrl: './short-term-schedule.component.html',
  styleUrls: ['./short-term-schedule.component.css']
})
export class ShortTermScheduleComponent implements OnInit {
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
