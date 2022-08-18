import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  size: number = 14;
  font: string = "Lucida Console"; 
  color: string = "red"; 

  constructor() { }

  ngOnInit(): void {
  }

}
