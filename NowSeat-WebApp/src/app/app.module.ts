import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorWidgetComponent } from './widgets/selector-widget/selector-widget.component';
import { HomeComponent } from './screens/home/home.component';
import { TransportListFragmentComponent } from './fragments/transport-list-fragment/transport-list-fragment.component';
import { SingleTransportWidgetComponent } from './widgets/singleTransportWidget/singleTransportWidget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectorWidgetComponent,
    TransportListFragmentComponent,
    SingleTransportWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
