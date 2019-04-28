import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//import { User } from '../interfaces/user';
import { Storage } from '@ionic/storage';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  aprobada = 'aprobada',
  regular = 'regular',
  cursando = 'cursando'
}
 
@Injectable({
  providedIn: 'root'
})

export class SaoService {

  urlhistorialalumno = 'http://localhost/api/sao/historial/index.php';
  urlplanesalumno = 'http://localhost/api/sao/planesalumno/index.php'; 
  urlacceso = 'http://localhost/api/sao/acceso/index.php'; 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient,private storage: Storage) { }
 
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} dni Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  buscarPlanes(dni: string, type: SearchType): Observable<any> {

    return this.http.get(`${this.urlplanesalumno}?dni=${encodeURI(dni)}`).pipe(map(results => results['Search']));
    
  }
 

  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} dni Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
 buscarHistorial(dni: string, type: SearchType): Observable<any> {

  return this.http.get(`${this.urlhistorialalumno}?dni=${encodeURI(dni)}`).pipe(map(results => results['Search']));
  

}

  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    //return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

  login(usuario, clave): Observable<any>{

   // return this.http.get(`${this.urlacceso}?us=${usuario}&pw=${clave}`);
   return this.http.get(`${this.urlacceso}?us=${usuario}&pw=${clave}`).pipe(map(results => results['Search']));
   
   /*return this.http.get(`${this.urlacceso}?us=${usuario}&pw=${clave}`).pipe(
    map(res => res)
).subscribe(result => {
    console.log(result);
});
*/
  

  
  }
/*
this.http.get('someurl').pipe(

    map(res => res.json())

).subscribe(result => {
    console.log(result);
});

*/



 /* getPartners() {

    this.http.get(`${this.urlacceso}?us=dci@ucu.edu.ar&pw=dci`).pipe(
      map(results => results['Search'])
     
      );
    
       
  });*/
//}


}