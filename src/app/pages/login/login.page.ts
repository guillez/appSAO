import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { MoviesPage } from '../movies/movies.page';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SaoService, SearchType } from '../../services/sao.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  results: Observable<any>;
  sf_id: string;

  constructor(public navCtrl: NavController,private authService: AuthService,private storage: Storage, private saoService: SaoService) { }

  ngOnInit() {
  }



  onSubmitLogin(){

    this.results = this.saoService.login(this.email, this.password);
    this.results.forEach(val => {
     // console.log('id is', val[0].id);
      this.storage.set('sf_id', val[0].id);
      this.storage.set('documento', val[0].documento);
      this.storage.set('idp', val[0].idp);
      this.storage.set('apellido', val[0].apellido); 
      this.storage.set('nombre', val[0].nombre);                
      if( val[0].id > 0) this.navCtrl.navigateForward('menu');
    });

  }

}
