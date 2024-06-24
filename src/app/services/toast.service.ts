import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  async presentToast(message: string, duration: number,position: 'top' | 'bottom' | 'middle' = 'bottom', cssClass: string = '') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'middle',
      cssClass: cssClass
    });
    toast.present();
  }
}
