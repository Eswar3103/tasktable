import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: DataService) {}

  // rowId: number ;
  @Input() id: any;
 //id:any;
  data_details: any;
 
  data = [
    {
      id: 1,
      email: 'eswar@gmail.com',
      usertype: 'developer',
      password: '1234',
      showDetail: false,
      details: {
        DOJ: '1/05/2023',
        address: 'Ramnad',
      },
    },
    {
      id: 2,
      email: 'akr@gmail.com',
      usertype: 'sr.developer',
      password: '12346',
      showDetail: false,
      details: {
        DOJ: '1/05/2013',
        address: 'selam',
      },
    },
    {
      id: 3,
      email: 'amr11@gmail.com',
      usertype: 'admin',
      password: '123412',
      showDetail: false,
      details: {
        DOJ: '1/05/2043',
        address: 'Madurai',
      },
    },
    {
      id: 4,
      email: 'rajar@gmail.com',
      usertype: 'CEO',
      password: '123456',
      showDetail: false,
      details: {
        DOJ: '11/05/2003',
        address: 'Chennai',
      },
    },
  ];

  
  dataFilter() {
    this.data_details = this.data.filter((data) => data.id == this.id);
    console.log('data', this.data_details);
  }

  ngOnInit(): void {
    this.service.dataEmiiter.subscribe((value) => {
      this.id = value;
      console.log( this.id );
      this.dataFilter();
      
    });
   
  }
}
