import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl: NavController,private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmitLogout(){
    this.navCtrl.navigateForward('login');
  }

  onSubmitPlaneshistorial(){
    this.navCtrl.navigateForward('planeshistorial');
  }

}
