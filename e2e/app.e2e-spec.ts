import { MycompanyPage } from './app.po';

describe('mycompany App', function() {
  let page: MycompanyPage;

  beforeEach(() => {
    page = new MycompanyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
