import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionDetailComponent } from './transaction-list/transaction-detail/transaction-detail.component';
import { ClockComponent } from './clock/clock.component';






@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CalculatorComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    ClockComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    HttpClientModule,
    NgbModule,
    //   HttpClientInMemoryWebApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
