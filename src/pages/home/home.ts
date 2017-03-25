import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string = '';
  motor_l: number = 0;
  motor_r: number = 0;
  servo: number = 0;
  isFired: boolean = false;
  _db: any;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this._db = af.database.object('/');
  }

  changeUser(user): void {
    this.user = user;
  }

  onChange(key, value): void {
    if (this.user) {
      this._db.update({ [this.user + key]: value });
    }
  }

  onFire(): void {
    if (this.user) {
      this.isFired = !this.isFired;
      this._db.update({ [this.user + 'fire']: this.isFired ? 1 : 0 });
    }
  }

}
