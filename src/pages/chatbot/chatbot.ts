import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatServiceProvider } from './../../providers/chat-service/chat-service';
import { IChat } from './../../models/chatModel';
/**
 * Generated class for the ChatbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html',
})
export class ChatbotPage {
  chats : IChat[] = [];
  message : string;
  sending : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat : ChatServiceProvider) {
  }

  ionViewDidLoad() {
// subscribe to pusher's event
// this._chat.getChannel().bind('chat', data => {
//   if(data.type !== 'bot'){
//     data.isMe = true;
//   };
//   this.chats.push(data);
// }); 
 }

 sendMessage() {
  this.sending = true;
  this._chat.sendMessage(this.message)
    .subscribe(resp => {
      this.message = '';
      this.sending = false;
    }, err => {
      this.sending = false;
    } );
}

}
