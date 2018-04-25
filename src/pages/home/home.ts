import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
import { AddStudentPage } from '../../pages/student/addStudent';
import { ViewStudentPage } from '../../pages/student/viewStudent';
import { ViewAttendancePage } from '../../pages/attendance/viewAttendance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public restProvider: RestProvider, private storage: Storage) {}

  addStudent(){
		console.log('go to add student page');
		this.navCtrl.push(AddStudentPage);
	}

	viewStudent(){
		console.log('go to view student page');
		this.navCtrl.push(ViewStudentPage);
	}

	attendanceStudent(){
		console.log('go to view attendance student page');
		this.navCtrl.push(ViewAttendancePage);
	}

  	tryLogout(){

  		this.storage.remove('token');
		this.navCtrl.setRoot(LoginPage);

  	}

  }

