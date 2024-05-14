 
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ObligatoryInsuranceService} from "../../core/services/obligatory-insurance.service"
import {ObligatoryInsurance} from "../../public/models/obligatory-insurance.model";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-verifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verifications.component.html',
  styleUrl: './verifications.component.scss'
})
export class VerificationsComponent implements OnInit{
  id:string = "";
  type:string="";
  name:string=""
  startDate:string=""
  endDate:string=""
  today:string=""
  constructor(private activatedRoute:ActivatedRoute,private obligservicse:ObligatoryInsuranceService ) { }
 
  
  
  ngOnInit() {
  
    this.id = this.activatedRoute.snapshot.params['id'];
    this.name = this.activatedRoute.snapshot.params['name'];
    this.startDate = this.activatedRoute.snapshot.params['startDate'];
    this.endDate = this.activatedRoute.snapshot.params['endDate'];
    this.today = this.activatedRoute.snapshot.params['today'];
    
   
  }
 
 
    
  }


