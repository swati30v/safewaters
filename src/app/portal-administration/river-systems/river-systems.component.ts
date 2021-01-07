import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from 'src/app/confirm-dialog.service';  

@Component({
  selector: 'app-river-systems',
  templateUrl: './river-systems.component.html',
  styleUrls: ['./river-systems.component.css']
})
export class RiverSystemsComponent implements OnInit {
	closeResult: string;
  	constructor(private modalService: NgbModal,private confirmDialogService: ConfirmDialogService) {}

	openVerticallyCentered(content) {
	    this.modalService.open(content, { centered: true,  size: 'md'  });
	}
	public openConfirmationDialog() {
		this.confirmDialogService.confirm('','')
		// .then((confirmed) => console.log( confirmed))
		// .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
		
	}
  	ngOnInit() {  }
}
