import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';

@Injectable() //enjekte edilebilir.  //loginguard bir servistir.Guardlar birer servis gibi çalışır.Servis olabilmesi için injektiable declerasyonunu(bildirisini) üzerinde tutuyor olması gerekir.
export class LoginGuard implements CanActivate {
  //Aktive edebilir mi?true dönerse bu guard gitmek istediği yeri aktive edebilir.false dönerse aktive edemez. //implements:uygulamak
  constructor(private accountService: AccountService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.accountService.isLoggedIn(); //app.routing.module.ts de bunu yaptım 11.satırda loginguard var. - sonra app.module.ts de global servis olarak eklene
        if (logged) {
            return true; //guard geçişe izin verecek
        } 
        this.router.navigate(["login"]);  // guard, geçişe izin vermedne kullanıcıyı login sayfasına gönderecek.
        return false;
      }
    }



