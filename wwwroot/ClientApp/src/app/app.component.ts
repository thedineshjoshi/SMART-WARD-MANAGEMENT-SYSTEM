import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName = 'Dinesh';
  lastName = 'Joshi';
  username = '';
  password = '';
  title = 'ClientApp';
  public demo = 'Dinesh Prasad Joshi';

  onClick() {
    if (this.username == this.firstName && this.password == this.lastName) {
      alert('Login Successfullu');
    } else {
      alert('Login Unsuccessfull');
    }
    alert('Hello World');
  }
}
