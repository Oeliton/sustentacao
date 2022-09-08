import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../model/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['home']);

    console.log("Erro");
    /*this.loginService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (error) => {
        alert('Usuário ou senha inválido');
      }
    );*/
  }

}
