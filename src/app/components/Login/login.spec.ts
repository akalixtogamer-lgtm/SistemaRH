import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Login: validação acessível', () => {
  it('mostra erros, marca os campos como inválidos e foca o primeiro campo ao clicar em Entrar vazio', async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Login);
    document.body.appendChild(fixture.nativeElement);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    el.querySelector<HTMLButtonElement>('button')!.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const email = el.querySelector<HTMLInputElement>('#login-email')!;
    expect(el.querySelector('#login-email-erro')?.textContent).toContain('Informe seu e-mail.');
    expect(el.querySelector('#login-senha-erro')?.textContent).toContain('Informe sua senha.');
    expect(email.getAttribute('aria-invalid')).toBe('true');
    expect(email.getAttribute('aria-describedby')).toBe('login-email-erro');
    expect(document.activeElement).toBe(email);
    fixture.nativeElement.remove();
  });
});
