import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions : Question[]  = [{
    id: 0,    
    question: "BING CHILLING",
    answerA: "SHINZO",
    answerB:"BOAA",
    answerC:"DAMNN", 
    correctAnswer:0},
    {
      id: 1,    
      question: "BING AWZ",
      answerA: "ASD",
      answerB:"SD",
      answerC:"SDZ", 
      correctAnswer:1}]

  AddQuestion(question: Question)
  {
    this.questions.push(question);
  }


  constructor() { }
}
