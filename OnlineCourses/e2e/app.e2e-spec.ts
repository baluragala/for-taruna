import { OnlineCoursesPage } from './app.po';

describe('online-courses App', () => {
  let page: OnlineCoursesPage;

  beforeEach(() => {
    page = new OnlineCoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
