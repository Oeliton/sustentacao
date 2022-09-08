import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastro() {
    console.log('cadastro');
    this.router.navigate(['extracao/extracao-totem']);
  }

  extracao() {
    this.router.navigate(['extracao/extracao-minhabrk']);
  }

}
