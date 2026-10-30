import { Component, ElementRef, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  // Atividade só de interface: o botão apenas valida os campos.
  // Não há envio, autenticação nem mensagem de sucesso.
  protected entrar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      // Leva o foco ao primeiro campo com erro, para quem usa teclado ou leitor de tela
      const primeiroInvalido = this.host.nativeElement.querySelector('input.ng-invalid');
      primeiroInvalido?.focus();
    }
  }

  protected mostrarErro(campo: 'email' | 'senha'): boolean {
    const controle = this.form.controls[campo];
    return controle.invalid && controle.touched;
  }
}
