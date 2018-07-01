import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.dataService.getRemoteData();
  }

  start() {
    this.navCtrl.push(StartPage);
  }

}
