import { SaoService, SearchType } from '../../services/sao.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-planeshistorial',
  templateUrl: './planeshistorial.page.html',
  styleUrls: ['./planeshistorial.page.scss'],
})
export class PlaneshistorialPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  documento: string = "";
  type: SearchType = SearchType.all;

  //constructor(public navCtrl: NavController,private authService: SaoService ) { }
  constructor(public navCtrl: NavController, private saoService: SaoService, private storage: Storage) { }

  ngOnInit() {
    
   this.storage.get('documento').then((val) => {
    console.log('dd: ', val);
    this.documento= val;
  });
  
    this.results = this.saoService.buscarPlanes(this.documento, this.type);
  }

  onSubmitHistorial(idplanestudio){
    //console.log('pe: ', idplanestudio);
    this.navCtrl.navigateForward('historial');
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }



  
}
