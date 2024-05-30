import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'acurd';

  id = new EventEmitter<string>();
  showchild: boolean = false;
  //childdata: any;
  constructor(private router: Router,private service:DataService) {}
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

  navigateTochild(id: any) {
    // this.service.raiseDataEventEmitter(id)
    //   console.log(id)
    if(id){
      this.service.raiseDataEventEmitter(id)
      console.log(id);
      this.showchild = true;
    }
    else{
      this.showchild = false;
    }
    
  
  }
  
}
