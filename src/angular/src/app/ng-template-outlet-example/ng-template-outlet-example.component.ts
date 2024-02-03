import { Component } from '@angular/core';

@Component({
  selector: 'ng-template-outlet-example',
  template: `
    <ng-container *ngTemplateOutlet="templateRef; context: exampleContext"></ng-container>
    <ng-template #templateRef let-default let-other="aContextProperty">
      <div>
        $implicit = '{{default}}'
        aContextProperty = '{{other}}'
      </div>
    </ng-template>
  `,
  styles: [
  ]
})
export class NgTemplateOutletExampleComponent {
  exampleContext = {
    $implicit:'default context property when none specified',
    aContextProperty: 'a context property'
  }
}
