import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, AlertController } from 'ionic-angular';
import { NgModule }      from '@angular/core';

import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../home/home';

//import { ViewGenerateCodePage } from '../student/generate-qr';

@Component({
  selector: 'page-add-student',
  templateUrl: 'addStudent.html'
})
export class AddStudentPage {

	qrData = null;
	createdCode = null;
  data:any;
  data2:any;
  addStudent:any;
  @ViewChild('pelajar_nama') pelajar_nama;
  @ViewChild('sekolah_id') sekolah_id;
  @ViewChild('pelajar_umur') pelajar_umur;
  @ViewChild('pelajar_sesi') pelajar_sesi;
  @ViewChild('checkpoint_id') checkpoint_id;
 


  constructor(public navCtrl: NavController, 
	private alertCtrl: AlertController, 
	public restProvider: RestProvider, 
	private storage: Storage) {

	this.getPost2();
	this.getPost3();
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad AddStudent Page');
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

	getPost2(){
	    this.restProvider.getPost2().then(data=>{
				this.data=data;
				console.log(this.data);
		    });
	}

	getPost3(){
	    this.restProvider.getPost3().then(data2=>{
				this.data2=data2;
				console.log(this.data2);
		    });
	}

	/*doRefresh(refresher) {
		console.log('Begin async operation', refresher);

		setTimeout(() => {
			console.log('Async operation has ended');
			this.getPost2();
			refresher.complete();
		}, 20);
	}
	
	doRefresh2(refresher2) {
		console.log('Begin async operation', refresher2);

		setTimeout(() => {
			console.log('Async operation has ended');
			this.getPost3();
			refresher2.complete();
		}, 20);
	}*/


	
	registerStudent(){
		
		console.log(this.pelajar_nama.value  + ' ' + this.sekolah_id.value + ' ' + this.pelajar_umur.value + ' '  + this.pelajar_sesi.value + ' ' + this.checkpoint_id.value + ' ' );

		if(this.pelajar_nama.value  != '' && this.sekolah_id.value !='', this.pelajar_umur.value !='', this.pelajar_sesi.value !='',this.checkpoint_id.value !='')
		{
				this.addStudent = { 
					pelajar_nama: this.pelajar_nama.value,
				  	sekolah_id: this.sekolah_id.value,
				  	pelajar_umur: this.pelajar_umur.value,
				  	pelajar_sesi: this.pelajar_sesi.value,
				  	checkpoint_id: this.checkpoint_id.value
  
				};
  
				console.log(this.addStudent);
  
				this.restProvider.addStudent(this.addStudent); 
				this.createdCode = this.qrData;
				
  
		}else
		{	//error **
			this.presentAlert('Error', 'Please fill in the form');
  
		}

		

		
  
	}


}
