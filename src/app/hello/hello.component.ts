import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent{

    userName: string = ''; // Nom de l'utilisateur
    selectedFont: string = 'Arial'; // Police de caract�re s�lectionn�e
    fontSize: string = '16'; // Taille de la police
    textAlignment: string = 'center'; // Alignement du texte (gauche par d�faut)

    changeSize(value: any) {
        console.log(value);
        document.getElementById('text')!.style.fontSize = value+"px";
    }
}
