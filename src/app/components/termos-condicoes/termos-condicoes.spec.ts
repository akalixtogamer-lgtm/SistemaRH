import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TermosCondicoes } from './termos-condicoes';

describe('TermosCondicoes', () => {
  let component: TermosCondicoes;
  let fixture: ComponentFixture<TermosCondicoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosCondicoes],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TermosCondicoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
