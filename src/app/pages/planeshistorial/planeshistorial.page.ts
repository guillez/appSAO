import { SaoService, SearchType } from '../../services/sao.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planeshistorial',
  templateUrl: './planeshistorial.page.html',
  styleUrls: ['./planeshistorial.page.scss'],
})
export class PlaneshistorialPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  //constructor(public navCtrl: NavController,private authService: SaoService ) { }
  constructor(public navCtrl: NavController, private saoService: SaoService) { }

  ngOnInit() {
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }

  onSubmitHistorial(idplanestudio){
    this.navCtrl.navigateForward('historial');
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }



  
}
