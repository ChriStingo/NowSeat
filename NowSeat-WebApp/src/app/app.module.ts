import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorWidgetComponent } from './widgets/selector-widget/selector-widget.component';
import { HomeComponent } from './screens/home/home.component';
import { TransportListFragmentComponent } from './fragments/transport-list-fragment/transport-list-fragment.component';
import { SingleTransportWidgetComponent } from './widgets/singleTransportWidget/singleTransportWidget.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleCounterPipe } from './pipe/vehicleCounter.pipe';
import {MqttModule} from 'ngx-mqtt';
import { MQTT_SERVICE_OPTIONS } from './constants/constants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectorWidgetComponent,
    TransportListFragmentComponent,
    SingleTransportWidgetComponent,
    VehicleCounterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
