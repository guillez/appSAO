import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
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

  urlhistorial = 'http://localhost/api/sao/historial/index.php';
  urlplanesalumno = 'http://localhost/api/sao/planesalumno/index.php'; 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
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
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    //return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}