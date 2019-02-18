import { Ng2appPage } from './app.po';

describe('ng2app App', function() {
  let page: Ng2appPage;

  beforeEach(() => {
    page = new Ng2appPage();
  });

  it('should display app in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app');
  });
});
