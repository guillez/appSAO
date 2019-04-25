import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(public navCtrl: NavController,private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmitHistorial(){
   // this.navCtrl.navigateForward('historial');
  }

}
