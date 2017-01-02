import { browser, element, by } from 'protractor';

export class KiANgular2SPAForm0Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
