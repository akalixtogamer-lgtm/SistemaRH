import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PoliticaPrivacidade } from './politica-privacidade';

describe('PoliticaPrivacidade', () => {
  let component: PoliticaPrivacidade;
  let fixture: ComponentFixture<PoliticaPrivacidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaPrivacidade],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaPrivacidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
