import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, AlertController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-view-attendance',
  templateUrl: 'viewAttendance.html'
})
export class ViewAttendancePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public restProvider: RestProvider, private storage: Storage) {

  }

}
