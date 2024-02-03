import { Component } from '@angular/core';

@Component({
  selector: 'app-usage-example',
  templateUrl: './usage-example.component.html',
  styleUrls: ['./usage-example.component.scss']
})
export class UsageExampleComponent {
  mode = 'list';

  items = [
    {
      header: 'In nostra ligula, curabitur donec',
      content: 'Ligula pretium proin, morbi erat, condimentum nec sapien viverra vulputate aenean lectus....'
    },
    {
      header: 'Nec placerat at sagittis, fermentum risus consequat',
      content: 'Fringilla scelerisque phasellus, inceptos magna, eu vehicula auctor suspendisse pretium...'
    },
    {
      header: 'Fringilla scelerisque phasellus',
      content: 'Quisque nibh bibendum nam, imperdiet curae ornare, id feugiat ac aptent lobortis fermentum vehicula metus...'
    },
    {
      header: 'Ligula pretium proin, morbi erat, condimentum',
      content: 'Nec placerat at sagittis, fermentum risus consequat, lectus eget aliquet iaculis viverra class...'
    },
  ]
}
