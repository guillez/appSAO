import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { MoviesPage } from '../movies/movies.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public navCtrl: NavController,private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    //$scope.token = token;
    //localStorage.setItem("token", $scope.token);
    //$scope.token = localStorage.getItem("token");
    //if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){//go ahead and authenticate them without getting a new token.}

    //this.navCtrl.push(movies);
    if (this.email=='u' ) {
      if(this.password=='1') {
          //console.log(this.email);
    this.navCtrl.navigateForward('menu');
     } }
    // this.authService.login(this.email, this.password);
     // this.authService.login(this.email);

  }

}
