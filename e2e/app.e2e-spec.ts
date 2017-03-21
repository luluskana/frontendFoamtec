import { FrontendFoamtecPage } from './app.po';

describe('frontend-foamtec App', () => {
  let page: FrontendFoamtecPage;

  beforeEach(() => {
    page = new FrontendFoamtecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
