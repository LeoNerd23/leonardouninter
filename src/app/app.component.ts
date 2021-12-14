import { Component } from '@angular/core';
import { Aluno } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //estancia 5 objetos do tipo Aluno
  jucinei: Aluno = new Aluno("Jucinei", 2315592, "Análise e Desenvolvimento de Sistemas", "17/08/1989");
  camila: Aluno = new Aluno("Camila", 6924126, "Administração", "30/07/1993");
  julio: Aluno = new Aluno("Julio", 2136596, "Design", "24/02/1989");
  adao: Aluno = new Aluno("Adão", 3189429, "Educação Fisica", "05/11/1992");
  juliane: Aluno = new Aluno("Juliane", 3461939, "Redes de Computadores", "25/03/1991");

  //Adiciona os 5 objetos a lista de alunos
  alunos: Aluno[] = [this.jucinei, this.camila, this.julio, this.adao, this.juliane];
  
}
