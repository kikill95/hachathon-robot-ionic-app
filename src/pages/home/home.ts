import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string = '';
  left: number = 0;
  right: number = 0;
  servo: number = 0;
  constructor(public navCtrl: NavController) {

  }

  changeUser(user): void {
    console.log(user);
  }

  onChange(key, value): void {
    console.log(key, value);
  }

  onFire(): void {
    console.log('onFire');
  }

}
