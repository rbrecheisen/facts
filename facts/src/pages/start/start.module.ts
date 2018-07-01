import { NgModule } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    IonicPageModule.forChild(StartPage),
  ],
})
export class StartPageModule {}
