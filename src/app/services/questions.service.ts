import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions : Question[]  = [{
    id: 0,    
    question: "Z iloma krajami graniczy Polska?",
    answerA: "7",
    answerB:"8",
    answerC:"9", 
    correctAnswer:0},
    {
      id: 1,    
      question: "Największy ocean na Ziemi to?",
      answerA: "Ocean Indyjski",
      answerB:"Ocean Atlantycki",
      answerC:"Ocean Spokojny", 
      correctAnswer:2}]

  AddQuestion(question: Question)
  {
    this.questions.push(question);
  }


  constructor() { }
}
