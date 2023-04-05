import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash_board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  imageSrc: string='';

  constructor(private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(data)
    });

    this.http.get('/plot').subscribe((response: any) => {
      this.imageSrc=response.path
      alert(this.imageSrc)
    });
    
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
}

