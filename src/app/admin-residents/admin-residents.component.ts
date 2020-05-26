import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-residents',
  templateUrl: './admin-residents.component.html',
  styleUrls: ['./admin-residents.component.css']
})
export class AdminResidentsComponent implements OnInit {

  searchResident = "";

  residents: {id: string, name: string, status: string, caretaker: string, room: string, pNum: string }[] = [
  	{id: '1', name: "loli", status: "Healthy", caretaker: "Louis", room: "R301", pNum: "011202016243"},
  	{id: '2', name: "pop", status: "Healthy", caretaker: "Angel", room: "R302",  pNum: "011202011113"},
  	{id: '3', name: "aa", status: "Not Healthy", caretaker: "Papi", room: "R303",  pNum: "01233333232"},
  	{id: '4', name: "ddd", status: "Healthy", caretaker: "Irwin", room: "R304",  pNum: "01111123233"},
  	{id: '5', name: "ggg", status: "Not Healthy", caretaker: "Oppi", room: "R305",  pNum: "01782829929"}
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
