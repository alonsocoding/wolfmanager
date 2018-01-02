import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NotesRoutingModule, routedComponents } from './notes-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { ImageViewComponent } from './all-notes/all-notes.component';
import { NgbdModalContent } from './all-notes/all-notes.component';
import { ImageViewComponent2 } from './my-notes/my-notes.component';
import { NgbdModalContent2 } from './my-notes/my-notes.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    NotesRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
    ...components,
    ImageViewComponent,
    NgbdModalContent,
    ImageViewComponent2,
    NgbdModalContent2
  ],
  entryComponents: [
    ImageViewComponent,
    NgbdModalContent,
    ImageViewComponent2,
    NgbdModalContent2
  ],
  providers: [
    SmartTableService,
  ],
})
export class NotesModule { }
