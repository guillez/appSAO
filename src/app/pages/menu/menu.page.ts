import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl: NavController,private authService: AuthService,private storage: Storage ) { }

  ngOnInit() {
          
           this.storage.get('email').then((val) => {
          //console.log('email is', val);
        });
  }

  onSubmitLogout(){
    this.storage.set('sf_id', 0);
    this.navCtrl.navigateForward('login');
  }

  onSubmitPlaneshistorial(){
    this.navCtrl.navigateForward('planeshistorial');
  }

}
