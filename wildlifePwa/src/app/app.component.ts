import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Choctaw Nation Fish, Game, and Animals Code', url: '/code', icon: 'book' },
    { title: 'FAQ', url: '/faq', icon: 'help' },
    { title: 'Share', url: 'share', icon: 'share' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
