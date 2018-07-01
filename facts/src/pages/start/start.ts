import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SelectItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-item',
  templateUrl: 'start.html',
})

export class StartPage {

  public items = [];
  title = ''
  idx = 0;
  question = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.dataService.getData().then((questions) => {
      if(questions) {
        this.items = questions;
        this.idx = this.selectIndex(this.items);
        this.title = this.items[this.idx].title;
      }
    });
  }

  ionViewDidLoad() {
  }

  selectIndex(items) {
    return Math.floor(Math.random() * (items.length - 1));
  }

  removeItem(items, idx) {
    items.splice(idx, 1);
  }

  next() {
    if(this.question) {
      this.title = this.items[this.idx].description;
      this.removeItem(this.items, this.idx);
      this.question = false;
    }
    else {
      this.idx = this.selectIndex(this.items);
      if(this.idx < 0){
        this.navCtrl.pop();
        return;
      }
      this.title = this.items[this.idx].title;
      this.question = true;
    }
  }
}
