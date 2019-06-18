import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  login:any;


  constructor(private route: ActivatedRoute, private router: Router) { 
    //this.route.queryParams.subscribe(params =>)

    if (this.router.getCurrentNavigation().extras.state) {
      this.login = this.router.getCurrentNavigation().extras.state.login;
    }
  }

  ngOnInit() {
  }





}
