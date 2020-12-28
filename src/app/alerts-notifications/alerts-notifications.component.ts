import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alerts-notifications',
  templateUrl: './alerts-notifications.component.html',
  styleUrls: ['./alerts-notifications.component.css']
})
export class AlertsNotificationsComponent implements OnInit {
    closeResult: string;
  	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'xl'  });
	}
	
  	ngOnInit() {  }

}
