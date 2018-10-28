import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsPage } from './feeds';

@NgModule({
  declarations: [
    FeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedsPage),
  ]
})
export class FeedsPageModule {}
