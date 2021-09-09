import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  length = 0;
  canGenerate =
    this.length && (this.useSymbols || this.useNumbers || this.useLetters);

  getLength(length: string) {
    const parsedLength = Number(length);
    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
    }
  }

  onButtonClick() {
    let validCharacters = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    if (this.useLetters) {
      validCharacters += letters;
    }

    if (this.useNumbers) {
      validCharacters += numbers;
    }

    if (this.useSymbols) {
      validCharacters += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }

    this.password = generatedPassword;
  }

  handleUseLetters() {
    this.useLetters = !this.useLetters;
  }
  handleUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
  handleUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
}
