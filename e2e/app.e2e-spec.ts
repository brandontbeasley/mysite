import { ThorlyPage } from './app.po';

describe('thorly App', () => {
  let page: ThorlyPage;

  beforeEach(() => {
    page = new ThorlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
