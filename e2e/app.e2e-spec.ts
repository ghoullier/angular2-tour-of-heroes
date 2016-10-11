import { Angular2TourOfHeroesCliPage } from './app.po';

describe('angular2-tour-of-heroes-cli App', function() {
  let page: Angular2TourOfHeroesCliPage;

  beforeEach(() => {
    page = new Angular2TourOfHeroesCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
