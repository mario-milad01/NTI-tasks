import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-app',
  imports: [RouterLink],
  templateUrl: './navbar-app.html',
  styleUrl: './navbar-app.css',
})
export class NavbarApp {
  isLoggedin :boolean=false;
  userName:string = 'Ahmed'
  handleToggleLoggedIn():void{
    this.isLoggedin = !this.isLoggedin;
  }
}
