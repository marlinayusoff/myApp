import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loginData:any;
	data:any;
	@ViewChild('username') username;
	@ViewChild('password') password; 

	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public restProvider: RestProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

  	presentAlert(title,subTitle) {
	let alert = this.alertCtrl.create({
			title: title,
			subTitle: subTitle,
			buttons: ['Dismiss']
		})
		alert.present();
	}


	tryLogin(){
		if(this.username.value !== "" && this.password.value !== "")
		{
			this.loginData = {
				username: this.username.value,
				password: this.password.value
			};
		    this.restProvider.login(this.loginData);
		}
		else
		{
			this.presentAlert('Error','Please fill all the inputbox');
		}

	}

	tryRegister(){
		console.log('go to register page');
		this.navCtrl.push(RegisterPage);
	}

}