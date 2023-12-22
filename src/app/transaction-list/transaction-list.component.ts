import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { Transaction } from '../interfaces/transaction';
import { TransactionService } from '../services/transaction.service';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  transactionList: Transaction[] = [];
  nbElements: number;
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

    @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  transactions: MatTableDataSource<Transaction>;

    constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.getTransacions();
  }

  ngAfterViewInit() { }

  getTransacions() {
    this.transactionService.getTransaction().subscribe((list) => {
      this.transactions = new MatTableDataSource(list);
      this.transactions.paginator = this.paginator;
      this.transactions.sort = this.sort;
      this.nbElements = list.length;
    });
  }

    navigateToDetails(transactionId: string) {
        this.router.navigate(['/transaction', transactionId]);
    }
}
