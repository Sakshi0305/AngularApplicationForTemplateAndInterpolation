import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',



  template: `
  <h1>Marvellous Infosystem</h1>
  <input type="Text">
  
`,
styles: ['h1 { color: blue; }']
  
 

})
export class AppComponent {
  title = 'Assignment6-3';
  


}
