import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Usuario } from './entities/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  nome:string = "Jhonatan";
  public user:Usuario = new Usuario();
  key:any;

  ngOnInit() {
    this.AuthService.user.subscribe(
      res=>{
        this.key = res.uid;
       this.userService.get(res.uid).subscribe(
         u => this.user = u
       )
      }  
      )
  }


  

  public appPages = [
    {
      title: 'Barbearias',
      url: '/home',
      icon: 'cut'
    },
    {
      title: 'Seja um parceiro',
      url: '/register-barber',
      icon: 'jet'
    },
    {
      title: 'Configurações',
      url: '/config',
      icon: 'construct'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public AuthService: AngularFireAuth,
    private userService:UsersService
  ) {
    this.ngOnInit();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  
 
  
}
