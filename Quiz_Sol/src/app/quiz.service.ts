import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  name="";
  quizzes:Quiz[]=[];
  quiz='./assets/quiz.json';

  httpOptions={
    header:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpserver:HttpClient) {}
  
  getQuizzes():Observable<Quiz[]>{
    //set the connection - http get
    return this.httpserver.get<Quiz[]>(this.quiz)
  };
  getName(value:string){
    this.name=value;
  }
  displayName(){
    return this.name;
  }
  
}
