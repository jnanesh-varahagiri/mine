import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render opening line on first step', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'I built something small for someone very special...'
    );
  });

  it('should move to gallery step after start click', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const startButton = fixture.nativeElement.querySelector('.btn-primary') as HTMLButtonElement;
    startButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.gallery-grid')).toBeTruthy();
  });
});
