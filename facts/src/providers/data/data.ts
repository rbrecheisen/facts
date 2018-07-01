import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptionsArgs } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage, public http: HttpClient) {

  }

  getData() {
    return this.storage.get('questions');
  }

  save(data) {
    this.storage.set('questions', data);
  }

  clearData() {
    this.save('questions', undefined);
  }

  getRemoteData() {
    this.http.get("http://localhost:8100/rbeesoftdata/questions.json").pipe(map(res => res)).subscribe(questions => {
      this.save(questions);
    });
  }

}
