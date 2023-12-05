import { Component } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Question } from '../services/question';

@Component({
  selector: 'app-game',
  standalone: true,
  
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports: [NgFor, FormsModule, NgIf, ReactiveFormsModule],
})
export class GameComponent {
  
  questions = this.questionsService.questions;
  isGaming = true;
  show = false;
  score = 0;
  constructor(private questionsService : QuestionsService){}

  OnSubmit(form: HTMLFormElement)
  {
    let numberOfQuestions = form.children[0].children.length;
    let checkedAnswer = -1;
    this.score = 0;
    for(let i = 0; i < numberOfQuestions; i++)
    {
      (form.children[0].children[i].children[0] as HTMLInputElement).checked;
      
      for(let y =0; y < 3; y++)
      {
        if((form.children[0].children[i].children[y] as HTMLInputElement).checked)
        {
          checkedAnswer = y;
        }
      }

      if(checkedAnswer == this.questions[i].correctAnswer)
      {
        checkedAnswer = -1;
        this.score++;
      }

    }
    this.show = true;
  }

  PlayAgain()
  {
    this.show = false;
  }

  ChangeForm(btn: HTMLButtonElement)
  {
    this.isGaming = !this.isGaming;
    if(!this.isGaming)
    {
      btn.innerHTML = "Wróc Do Gry"
    }
    else
    {
      btn.innerHTML = "Dodaj Pytanie"
    }
  }

  addQuestionFrom = new FormGroup(
    {
      content: new FormControl('',Validators.required),
      answerA: new FormControl('', Validators.required),
      answerB: new FormControl('', Validators.required),
      answerC: new FormControl('', Validators.required),
      correctAnswer: new FormControl('', Validators.required),
    })

  OnAddQuestion()
  {
    if(!this.addQuestionFrom.valid) return;
    const f = this.addQuestionFrom.value

    let length = this.questionsService.questions.length;


    let q : Question = {id: length+1, question: f.content, answerA: f.answerA, answerB: f.answerB, answerC: f.answerC, correctAnswer: parseInt(f.correctAnswer)}

    this.questionsService.AddQuestion(q);

    this.addQuestionFrom.reset();
  }
}
