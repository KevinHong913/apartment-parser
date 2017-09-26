import { ApartmentParserPage } from './app.po';

describe('apartment-parser App', () => {
  let page: ApartmentParserPage;

  beforeEach(() => {
    page = new ApartmentParserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
