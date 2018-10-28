  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;

  items = [
    'Notification',
    'About Us',
    'More Sections',
    'Privacy Policy',
    'Terms and conditions',
    'Version',
    'Rate this app',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      }
      else {
        this.city = 'Miami';
        this.state = 'FL';
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city,
      state: this.state
    }

    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
}
