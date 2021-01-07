import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/Apis.service';
import { ConfirmDialogService } from 'src/app/confirm-dialog.service';  


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit  {
	closeResult: string;
	  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private ApisService: ApisService, private confirmDialogService: ConfirmDialogService) {}

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