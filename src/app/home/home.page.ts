import { Component } from '@angular/core';
import { logging } from 'protractor';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private router: Router) {}

  login(loginForm){
    let navigationExtras: NavigationExtras={
      state: {
        login: loginForm.value.login
      }
    }
    this.router.navigateByUrl('profile-page',navigationExtras)
  }

  

}



