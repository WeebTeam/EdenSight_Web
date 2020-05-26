import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-staffs',
  templateUrl: './admin-staffs.component.html',
  styleUrls: ['./admin-staffs.component.css']
})
export class AdminStaffsComponent implements OnInit {

  searchResident = "";

  staffs: {id: string, name: string, guide: string, supervisor: string, room: string, pNum: string }[] = [
  	{id: '1', name: "Louis", guide: "loli", supervisor: "DAD Louis", room: "R301", pNum: "011202016243"},
  	{id: '2', name: "Angel", guide: "pop", supervisor: "DAD Angel", room: "R302",  pNum: "011202011113"},
  	{id: '3', name: "Papi", guide: "aa", supervisor: "DAD Papi", room: "R303",  pNum: "01233333232"},
  	{id: '4', name: "Irwin", guide: "ddd", supervisor: "DAD Irwin", room: "R304",  pNum: "01111123233"},
  	{id: '5', name: "Oppi", guide: "ggg", supervisor: "DAD Oppi", room: "R305",  pNum: "01782829929"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public delete(){
    alert("Are you sure you want to delete?")
  }

  public edit(residentId){
    alert(residentId);
  }
}
