import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'http://api.sr.se/api/v2/traffic/messages?format=json';
  data: any = { };

  constructor(private http: Http) {
    console.log('Running');
    this.getTraffic();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getTraffic() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}
