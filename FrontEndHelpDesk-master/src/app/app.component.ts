import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router'
import { AuthService } from './services/auth.service';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn = false;
  public userName: string;

  constructor(
    private router: Router, private authService: AuthService
  ) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-146161866-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  ngOnInit() {

    // this.isLoggedIn = this.authService.isLoggedIn();
    // if (!this.isLoggedIn) {
    //   this.login();
    // } else {
    //   this.userName = this.authService.getUserName();
    // }
  }

  login() {
    this.authService.obtainAccessToken();
  }
}
