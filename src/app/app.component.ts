import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
 
        <a>{{pageTitle}}</a>
        <ul>
          <li><a routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a  routerLinkActive='active' routerLink='/companies'>Company List</a></li>
        </ul>
    
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  pageTitle = 'Companies';
}
