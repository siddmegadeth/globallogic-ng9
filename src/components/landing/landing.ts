import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@Component({
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})

export class LandingComponent {

  constructor() {
    
  }


  title = 'Landing';
   displayedColumns: string[] = ['name', 'type', 'method', 'status','default','copy','delete'];
   dataSource = list;

  pageDataSource = new MatTableDataSource (list);


}


export interface listOfData {
  name: string;
  type: string;
  method: string;
  status: string;
  default: string;
  copy: string;
  delete: string;

}

const list: listOfData[] = [
  { name: 'Hydrogen', type: 'Due Date Reminder', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Reminder', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Certificate Expiration', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Reminder', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Drop', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Reminder', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Certification', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Due Date Reminder', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Certification', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
  { name: 'Hydrogen', type: 'Drop', method: 'Email',status : 'Active',default :'----',copy:'Copy',delete :'delete'},
];




