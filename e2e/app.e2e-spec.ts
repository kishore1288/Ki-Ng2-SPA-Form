import { KiANgular2SPAForm0Page } from './app.po';

describe('ki-angular2-spa-form0 App', function() {
  let page: KiANgular2SPAForm0Page;

  beforeEach(() => {
    page = new KiANgular2SPAForm0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
