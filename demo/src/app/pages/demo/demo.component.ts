import { Component, ViewEncapsulation } from '@angular/core';
import { BasicExampleComponent } from './components/basic-example.component';
import { BasicExampleDataComponent } from './components/basic-example-data.component';
import { BasicExampleSourceComponent } from './components/basic-example-source.component';
import { BasicExampleLoadComponent } from './components/basic-example-load.component';
import { AdvancedExampleConfirmComponent } from './components/advanced-example-confirm.component';

let hljs: any = require('highlight.js');

@Component({
  selector: 'demo',
  directives: [BasicExampleComponent, 
    BasicExampleDataComponent, 
    BasicExampleSourceComponent, 
    BasicExampleLoadComponent, 
    AdvancedExampleConfirmComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./demo.scss'), require('highlight.js/styles/dracula.css')],
  template: require('./demo.html')
})
export class DemoComponent {

  snippets = {
    install: require('raw-loader!./snippets/install.md'),
    require: require('raw-loader!./snippets/require.md'),
    directive: require('raw-loader!./snippets/directive.md'),
    settings: require('raw-loader!./snippets/settings.md'),
    template: require('raw-loader!./snippets/template.md'),
    array: require('raw-loader!./snippets/array.md'),
    dataTemplate: require('raw-loader!./snippets/data-template.md'),
    basicFull: require('raw-loader!./snippets/basic-full.md'),
    sourceRequire: require('raw-loader!./snippets/source-require.md'),
    createSource: require('raw-loader!./snippets/create-source.md'),
    sourceTemplate: require('raw-loader!./snippets/source-template.md'),
    search: require('raw-loader!./snippets/search.md'),
    searchTable: require('raw-loader!./snippets/search-table.md'),
    sourceFull: require('raw-loader!./snippets/source-full.md'),
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  }
}
