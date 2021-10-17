import { Component } from '@angular/core';
import { Aluno } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //estancia 5 objetos do tipo Aluno
  leonardo: Aluno = new Aluno("Leonardo", 3282772, "Análise e Desenvolvimento de Sistemas", "23/04/1994");
  mariana: Aluno = new Aluno("Mariana", 3253779, "Tecnologia da Informação", "30/09/1988");
  beline: Aluno = new Aluno("Beline", 3452891, "Ciência de Dados", "27/08/1985");
  alex: Aluno = new Aluno("Alex", 3189429, "Engenharia de Software", "05/12/1993");
  valesca: Aluno = new Aluno("Valesca", 3467998, "Tecnologia em Redes de Computadores", "25/04/1994");

  //Adiciona os 5 objetos a lista de alunos
  alunos: Aluno[] = [this.leonardo, this.mariana, this.beline, this.alex, this.valesca];
  
}
