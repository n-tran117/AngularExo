import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0; // First operation number
  num2: number = 0; // Second operation number
  operation: string = 'add'; // Default operation
  result: number = 0; // Operation Result
  history: {
    time: Date; // Operation timestamping
    operationString: string; // String operation (num1 op num2)
    result: number; // operation Result
  }[] = []; // Operation table historic

  // Cacul method
  calculate() {
    
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }

    // Créer une chaîne de caractères représentant l'opération
    const operationSymbol = this.operation === 'add' ? '+' :
      this.operation === 'subtract' ? '-' :
        this.operation === 'multiply' ? '*' :
          this.operation === 'divide' ? '/' : '';
    const operationString = `${this.num1} ${operationSymbol} ${this.num2}`;

    // Ajoutez l'opération à l'historique
    this.history.push({
      time: new Date(),// Horodatage actuel
      operationString: operationString, // Chaîne de caractères de l'opération
      result: this.result, // Résultat de l'opération
    });
  }

  // Méthode pour effacer une entrée de l'historique
  clearHistoryEntry(entity: any) {
    this.history.splice(this.history.indexOf(entity), 1); // Supprime l'entrée de l'historique à l'index spécifié
  }

  empty() {
    this.history = [];
  }
}
