import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component'
import { ContainerComponent } from './components/container/container.component';
import { LogService } from './services/log.service';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CardComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})

export class AppModule { }
