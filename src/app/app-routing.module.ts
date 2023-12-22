import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-list/transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: "hello", component: HelloComponent },
  { path: "calculator", component: CalculatorComponent },
    { path: "transaction", component: TransactionListComponent },
    { path: 'transaction/:id', component: TransactionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
