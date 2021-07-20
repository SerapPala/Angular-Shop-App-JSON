import { Injectable } from '@angular/core';
declare let alertify:any; //ALERTİFY İMPORT


@Injectable()
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }
  warning(message:string){
    alertify.warning(message)
  }
}
