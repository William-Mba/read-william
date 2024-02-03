import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-example2',
  templateUrl: './ng-template-outlet-example2.component.html',
  styleUrls: ['./ng-template-outlet-example2.component.scss']
})
export class NgTemplateOutletExample2Component {
  myContext = {
    $implicit: 'World',
    localSk: 'Svet'
  }
}
