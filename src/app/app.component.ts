import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SeriesApp';
  shows;
  constructor(private http:HttpClient){
    http.get('http://api.tvmaze.com/schedule',{
      params: {
        country:'ES',
        date:'2018-11-23'
      }
    }).subscribe( param => {
      console.log(param);
      this.shows = param;
    })
  }
}
