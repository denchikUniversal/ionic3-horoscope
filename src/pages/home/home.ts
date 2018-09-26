import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private actionSheetController: ActionSheetController) {  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      title: 'Способ оплаты',
      buttons: [{
        text: 'Использовать пробный период',
        role: 'destructive',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.navCtrl.push(AboutPage)
        }
      },  {
        text: 'Оплата',
        icon: 'card',
        handler: () => {
          
        }
      }, {
        text: 'Отмена',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

}
