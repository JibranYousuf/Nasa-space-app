import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ChatbotPage } from '../chatbot/chatbot';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  tab4Root = ChatbotPage;

  constructor() {

  }
}
