import { SaoService, SearchType } from '../../services/sao.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
//import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  valor: string = '';
  type: SearchType = SearchType.all;

  constructor(public navCtrl: NavController,private saoService: SaoService, private route: ActivatedRoute ) { }



  onSubmitHistorial(){
   // this.navCtrl.navigateForward('historial');
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.saoService.buscarPlanes(this.searchTerm, this.type);
  }



  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
     this.valor= params.get("id");
  })
  
    this.results = this.saoService.buscarHistorial(this.valor, this.type);
  }


  










}
