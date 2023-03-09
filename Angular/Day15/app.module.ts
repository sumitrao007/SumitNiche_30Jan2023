import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolatiuonComponent } from './stringinterpolatiuon/stringinterpolatiuon.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { Eventbinding4Component } from './eventbinding4/eventbinding4.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { Fordirective1Component } from './fordirective1/fordirective1.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child3Component } from './child3/child3.component';
import { ParentContentComponent } from './parent-content/parent-content.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolatiuonComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    Eventbinding3Component,
    Eventbinding4Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    Fordirective1Component,
    SwitchdirectiveComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    Child3Component,
    ParentContentComponent,
    ChildViewComponent,
    InbuildPipeComponent,
    CustompipeComponent,
    SummaryPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
