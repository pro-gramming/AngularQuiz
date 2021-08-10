import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name:string='';

  constructor(private route:Router, private quizService: QuizService) { }

  ngOnInit(): void {
  }

  OnSubmit(value1:string,value2:string){
    if(value1=="" || value2==""){
      alert("Please fill all the fields");
    }
    else{
      this.route.navigate(['/quiz']);
      this.quizService.getName(value1);
    }
  }

}
