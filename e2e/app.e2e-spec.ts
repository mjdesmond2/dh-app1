import { DhApp1Page } from './app.po';

describe('dh-app1 App', function() {
  let page: DhApp1Page;

  beforeEach(() => {
    page = new DhApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
