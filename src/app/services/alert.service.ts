import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlertError(title, text, timer){
    swal({
      title: title,
      text: text,
      icon: "error",
      // button: 'Close!',
      timer: timer
    });
  }
  
  showAlertSuccess(title, text, timer){
    swal({
      title: title,
      text: text,
      icon: "success",
      // button: "Close!",
      timer: timer
    });
  }
  
  async showAlertWarning(title, text, buttons){
    if(!buttons) buttons = true;
    let sure = await swal({
      title: title,
      text: text,
      icon: "warning",
      buttons: buttons,
      dangerMode: true,
    })
    return sure;
  }
}
