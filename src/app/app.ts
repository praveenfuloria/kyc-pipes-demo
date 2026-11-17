import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Kyc } from './kyc/kyc';

@Component({
  imports: [RouterOutlet, Kyc],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('kyc-pipes-demo');
}
