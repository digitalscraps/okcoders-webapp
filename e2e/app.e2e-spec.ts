import { PowerrangersPage } from './app.po';

describe('powerrangers App', () => {
  let page: PowerrangersPage;

  beforeEach(() => {
    page = new PowerrangersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
