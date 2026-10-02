import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { I18nService } from './core/i18n/i18n.service';

describe('App', () => {
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    i18n = TestBed.inject(I18nService);
    await i18n.use('en');
  });

  it('renders the translated brand', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const brand = (fixture.nativeElement as HTMLElement).querySelector('.brand');
    expect(brand?.textContent).toContain('My Portfolio');
  });

  it('updates the text when the language changes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    await i18n.use('fr');
    await fixture.whenStable();

    const brand = (fixture.nativeElement as HTMLElement).querySelector('.brand');
    expect(brand?.textContent).toContain('Mon Portfolio');
  });
});