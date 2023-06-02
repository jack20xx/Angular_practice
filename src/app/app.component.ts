import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// second test
  // resetUser = false;
  // username = 'jack';

  // onResetUser(event: any) {
  //   this.username = '';
  // }

  // third test
  showSecret = false;
  log = [];
  
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}