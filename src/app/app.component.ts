import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'berey-yamma';

  currentLetters: string[] = [];
  choosedLetter: string = "";
  isGameOver = false;
  playedLetters: string[] = [];
  playedLettersLength = 0;
  playerName = "";
  players: string[] = []; 
  playerOne = "";
  playerTwo = "";

  ngOnInit() {
    this.initLetters();
  }

  initLetters() {
    let letters = '';
    for (let i = 0; i < 26; i++) {
      letters += (i + 10).toString(36)
    }
    this.currentLetters = letters.split('');
  }

  getRandomLetter() {
    //console.log(this.getRandomNumberFromZeroToMax(currentLetters.length));
    if(this.players.length !== 2) {
      alert("Pseudo manquant !") 
      return;
    }
    if (this.currentLetters.length === 0) this.isGameOver = true;
    let choosedLetterIndex = this.getRandomNumberFromZeroToMax(this.currentLetters.length);
    this.choosedLetter = this.currentLetters[choosedLetterIndex];
    console.log(choosedLetterIndex);
    console.log(this.choosedLetter);
    this.playedLetters.push(this.choosedLetter);
    this.playedLettersLength = this.playedLetters.length;

    console.log(this.getLettersMinusChoosedLetter(this.currentLetters, choosedLetterIndex));
    console.log(this.currentLetters);
  }

  getLettersMinusChoosedLetter(currentLetters: any[], choosedLetterIndex: number) {
    currentLetters.splice(choosedLetterIndex, 1);
    return currentLetters;
  }

  getRandomNumberFromZeroToMax(max: number) {
    // On renvoie un entier aléatoire entre une valeur min (incluse)
    // et une valeur max (exclue).
    return Math.floor(Math.random() * max);
  }

  resetGame() {
    this.currentLetters = [];
    this.choosedLetter = "";
    this.isGameOver = false;
    this.playedLetters = [];
    this.playedLettersLength = 0;
    this.initLetters();
  }

  addPlayer() {
    console.log(this.playerName);
    if(this.players.length >= 2) {
      alert("Nombre de joeur(e)s complet !") 
      return;
    }
    if(this.playerName.length < 3) {
      alert("Pseudo trop court !") 
      return;
    }
    this.players.push(this.playerName);
    this.playerOne = this.players[0] || "";
    this.playerTwo = this.players[1] || "";
    this.playerName = "";
  }
}
