import { Angular2ContactManagerPage } from './app.po';

describe('angular2-contact-manager App', function() {
  let page: Angular2ContactManagerPage;

  beforeEach(() => {
    page = new Angular2ContactManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
