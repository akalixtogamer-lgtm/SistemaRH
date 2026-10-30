import { Routes } from '@angular/router';
import {Login} from './components/Login/login'; 
import {Cadastro} from './components/Cadastro/cadastro';
import {Enderecos} from './components/Enderecos/enderecos';
import {Contatos} from './components/contatos/contatos';
import { ListaFuncionarios } from './components/Lista-Funcionarios/lista-funcionarios';
import { FormularioFuncionarios } from './components/Formulario-Funcionarios/formulario-funcionarios';
import { PoliticaPrivacidade } from './components/politica-privacidade/politica-privacidade';
import { TermosCondicoes } from './components/termos-condicoes/termos-condicoes';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component: Login},
    {path:'cadastro',component: Cadastro},
    {path:'funcionarios', component: ListaFuncionarios},
    {path:'funcionarios/novo', component: FormularioFuncionarios},
    {path:'enderecos', component: Enderecos},
    {path:'contatos', component: Contatos},
    {path:'politica-de-privacidade', component: PoliticaPrivacidade},
    {path:'termos-e-condicoes', component: TermosCondicoes},
    {path:'**',redirectTo:'login',pathMatch:'full'}
];
