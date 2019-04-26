import { SaoService, SearchType } from '../../services/sao.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(public navCtrl: NavController,private saoService: SaoService ) { }



  onSubmitHistorial(){
    this.navCtrl.navigateForward('historial');
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }



  ngOnInit() {
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }


  










}
