import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	registerData:any; //tambah class step 1
	@ViewChild('username') username;
	@ViewChild('penjaga_nama') penjaga_nama;
	@ViewChild('penjaga_tel') penjaga_tel;
	@ViewChild('penjaga_alamat') penjaga_alamat;
	@ViewChild('password') password;
	@ViewChild('confirmpassword') confirmpassword;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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


//data yang masuk dalam register.html
  registerAccount(){
  	console.log(this.username.value  + ' ' + this.penjaga_nama.value + ' ' + this.penjaga_tel.value + ' '  + this.penjaga_alamat.value + ' ' + this.password.value + ' ' +this.confirmpassword.value);


  	//logic 1 , user perlu isi semua form, else akan keluar error **

  	if(this.username.value  != '' && this.penjaga_nama.value !='', this.penjaga_tel.value !='', this.penjaga_alamat.value !='',this.password.value !='' &&this.confirmpassword.value !='')
  	{
  		//logic 2,  tengok password match atau tidak.  kalau tak match dia akan keluar error ***
  		if(this.password.value == this.confirmpassword.value ){

  			//kita tambah kelas untuk tengok dalam console kalau password match
  			this.registerData = { //wajib tambah = (step2)
  				username: this.username.value,
				penjaga_nama: this.penjaga_nama.value,
				penjaga_tel: this.penjaga_tel.value,
				penjaga_alamat: this.penjaga_alamat.value,
				password: this.password.value

  			};

  			console.log(this.registerData); //(step3)

  			this.restProvider.register(this.registerData); //kena refer API (step 4)


  		}else
  		{	//error ***
  			this.presentAlert('Error', 'Password not match');
  		}

  	}else
  	{	//error **
  		this.presentAlert('Error', 'Please fill in the form');

  	}

  }

}
