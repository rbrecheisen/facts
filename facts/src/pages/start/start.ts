import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-select-item',
  templateUrl: 'start.html',
})

export class StartPage {

  public items = [];
  nr_items = 0;
  progress = '0 / 0';
  counter = 0;
  title = ''
  idx = 0;
  question = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.dataService.getData().then((questions) => {
      if(questions) {
        this.items = questions;
        this.nr_items = this.items.length;
        this.idx = this.selectIndex(this.items);
        this.title = this.items[this.idx].title;
        this.progress = this.counter + ' / ' + this.nr_items;
      }
      else {
        this.title = "Could not load the data";
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
      this.counter++;
      this.idx = this.selectIndex(this.items);
      if(this.idx < 0){
        this.navCtrl.pop();
        return;
      }
      this.progress = this.counter + ' / ' + this.nr_items;
      this.title = this.items[this.idx].title;
      this.question = true;
    }
  }
}
