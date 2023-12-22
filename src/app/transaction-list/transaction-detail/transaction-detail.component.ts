import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Transaction } from '../../interfaces/transaction';
import { TransactionService } from '../../services/transaction.service';


@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent {
    transaction: Transaction[];
    displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

    constructor(
        private route: ActivatedRoute,
        private transactionService: TransactionService,
        private location: Location,
    ) { }

    ngOnInit() {
        this.getTransactionById();
    }

    getTransactionById() {
        this.transactionService.getTransactionById(this.route.snapshot.paramMap.get('id') || 'nan').subscribe((list) => {
            this.transaction = list;
        });
    }

    goBack(): void {
        this.location.back();
    }
}
