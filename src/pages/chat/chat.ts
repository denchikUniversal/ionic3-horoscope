import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  result: string;
  family: string;
  friend: string;
  cansel: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
      this.result = this.navParams.get('result');
      this.family = this.navParams.get('family');
      this.friend = this.navParams.get('friend');
      this.cansel = this.navParams.get('cansel');    
    }

    ionViewDidLoad() { 
    }

    ionViewWillLeave(){
    }

    goBack() {
      this.navCtrl.pop();
    }

    
}
