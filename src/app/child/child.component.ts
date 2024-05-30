import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor(private route: ActivatedRoute){}
 
  // rowId: number ;
  @Input() cur_rowid:any;

  

  ngOnInit(): void {
    //this.rowId

  }
  
}
