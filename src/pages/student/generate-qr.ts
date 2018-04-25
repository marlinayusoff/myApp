import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
import {AddStudentPage} from '../student/addStudent';


@Component({
  selector: 'generate-qr',
  templateUrl: 'generate-qr.html'
})
export class ViewGenerateCodePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public restProvider: RestProvider, private storage: Storage) {}

  

  }

