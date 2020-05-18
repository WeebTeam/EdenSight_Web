import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  searchResident = "";

  residents: { name: string, status: string, caretaker: string, room: string }[] = [
  	{name: "loli", status: "Healthy", caretaker: "Louis", room: "R301"},
  	{name: "pop", status: "Healthy", caretaker: "Angel", room: "R302"},
  	{name: "aa", status: "Not Healthy", caretaker: "Papi", room: "R303"},
  	{name: "ddd", status: "Healthy", caretaker: "Irwin", room: "R304"},
  	{name: "ggg", status: "Not Healthy", caretaker: "Oppi", room: "R305"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public Try(event, item) {
    alert('Open ' + item.name);
  }

}
