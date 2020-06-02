import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {
  resident;
  vitalSigns;
  vs1;
  vs2;
  vs3;
  vs4;
  date;
  closeResult: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private modalService: NgbModal) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
  	this.resident = history.state.data;
  	this.vitalSigns = this.resident.vitalSigns;
  }

  public ShowMore(event, vs, content){
  	this.vs1 = vs.vs1;
  	this.vs2 = vs.vs2;
  	this.vs3 = vs.vs3;
  	this.vs4 = vs.vs4;
  	this.date = vs.date;
  	console.log(vs);

  	this.modalService.open(content, { centered: true });
  }
}
