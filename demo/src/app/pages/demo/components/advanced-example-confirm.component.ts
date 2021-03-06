import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES, LocalDataSource } from '../../../../../../ng2-smart-table.ts';

@Component({
  selector: 'advance-example-comfirm',
  directives: [NG2_SMART_TABLE_DIRECTIVES], // register the directive
  styles: [],
  template: `
    <ng2-smart-table 
    [settings]="settings" 
    [source]="source" 
    (deleteConfirm)="onDeleteConfirm($event)"
    (editConfirm)="onSaveConfirm($event)"
    (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
  `
})
export class AdvancedExampleConfirmComponent {

  settings = {
    delete: {
      confirmDelete: true
    },
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  
  source: LocalDataSource;
  
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onDeleteConfirm(event):void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(); 
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event):void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code'; 
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event):void {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
