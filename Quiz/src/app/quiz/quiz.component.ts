import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { QuitComponent } from '../quit/quit.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes : Quiz[]=[];
currentQuiz=0;
answerSelected=false;
correctAnswers=0;
incorrectAnswers=0;
result=false;
test=false;
clear=false;
info=true;
name="";

  constructor(private quizService: QuizService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.quizzes=this.quizService.getQuizzes();
    this.quizService.getQuizzes().subscribe(
      quizzes => {
        this.quizzes=quizzes;
      }
    )
    this.name=this.quizService.displayName();
  }

  onAnswer(option:boolean){
    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected=false;
    },800);

    if(option){
      this.correctAnswers++;
    }
    else{
      this.incorrectAnswers++;
    }
    this.answerSelected=true;
  }
  showResult(){
    this.result =true;
  }
  showTest(){
    this.test=true;
    setTimeout( ()=>{
      this.currentQuiz=10;
      this.test=false;
       this.info=false;
       alert("Oops! Time's Up!")
       }, 600000);
  }
  getDg() {
    const dialogRef = this.dialog.open(QuitComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
