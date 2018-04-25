import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, AlertController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-view-student',
  templateUrl: 'viewStudent.html'
})
export class ViewStudentPage {

  data:any;
  @ViewChild('pelajar_nama') pelajar_nama;
  @ViewChild('sekolah_nama') sekolah_nama;
  @ViewChild('pelajar_umur') pelajar_umur;
  @ViewChild('pelajar_sesi') pelajar_sesi;
  @ViewChild('checkpoint_nama') checkpoint_nama;

  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController, 
    public restProvider: RestProvider, 
    private storage: Storage) {

      this.getViewStudent();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewStudent Page');
  }
  
  
   //baca alert dari consructor AlertController
   presentAlert(title,subTitle) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: ['Dismiss']
      })
      alert.present();
    }

    getViewStudent(){
	    this.restProvider.getViewStudent().then(data=>{
				this.data=data;
				console.log(this.data);
		    });
	}
  

}
