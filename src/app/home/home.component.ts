import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // getUsers() {
  //   this.http.get('https://localhost:44349/api/Users').subscribe(users => this.users = users,
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  cancelRegisterMode(event: boolean){
    this.registerMode = false;
  }

}
