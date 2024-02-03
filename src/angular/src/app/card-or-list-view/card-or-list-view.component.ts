import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../card-item.directive';
import { ListItemDirective } from '../list-item.directive';

@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.scss']
})
export class CardOrListViewComponent {
  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: string = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate: any;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate: any;
}
