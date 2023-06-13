import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

declare const require: any;

@Component({
  selector: 'mfe1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() message: string;
  @Output() clicked = new EventEmitter<string>();

  ngVersion = VERSION.full;//require('../../package.json').dependencies['@angular/core'];

  // constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.router.navigateByUrl(location.pathname.substr(1));
  //   window.addEventListener('popstate', () => {
  //     this.router.navigateByUrl(location.pathname.substr(1));
  //   });
  // }
}
