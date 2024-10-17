import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  messages: { text: string, sender: string }[] = [];
  userInput: string = '';

  constructor(private chatbotService: ChatbotService) {}


  sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    // Ajouter le message de l'utilisateur à la liste des messages
    this.messages.push({ text: this.userInput, sender: 'user' });

    // Envoyer le message à l'API du chatbot
    this.chatbotService.sendMessage(this.userInput).subscribe(response => {
      // Ajouter la réponse du chatbot à la liste des messages
      this.messages.push({ text: response.message, sender: 'bot' });
    });

    // Réinitialiser l'entrée de l'utilisateur
    this.userInput = '';
  }
}
