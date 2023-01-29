import { Question } from "@/typing";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Answers from "./Answers";

function QuestionBox({ questions }: any) {
  
  const initialState = {
    currentQuestion: 1,
    answers: [],
    numberOfQuestions: questions.length,
    correctAnswers: [],
  };

  const [state, setState] = useState(initialState);
  const { currentQuestion, answers, numberOfQuestions } = state;
  const question = questions[currentQuestion];
  const router = useRouter();

  const submitAnswer = () => {
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) totalScore++;
    }
    router.push("/result");
  };

  const answerQuestion = (answer: never) => {
    answers[currentQuestion] = answer;
    setState({
      ...state,
      answers,
    });
    console.log(state.answers)
    console.log(state.correctAnswers)
    moveQuestion('next')
  };

  const moveQuestion = (direction: any) => {
    switch (direction) {
      case "next": {
        if (currentQuestion === numberOfQuestions - 1) {
          submitAnswer();
          return;
        }
        setState({
          ...state,
          currentQuestion: currentQuestion + 1,
        });
        break;
      }
    }
  };

  return (
    <div
      className="flex items-center flex-col w-1/4 space-y-2 p-10 bg-white/40 rounded-xl"
    >
      <p>
        Question {currentQuestion} of {numberOfQuestions}
      </p>
      <h1 className="text-2xl">{question?.question}</h1>
      <div className="flex space-x-2 w-full">
        <ul className="flex flex-col">
          <Answers
            correctAnswer={question?.correctAnswer}
            wrongAnswer={question?.incorrectAnswers}
            answerQuestion={answerQuestion}
            state={state}
          />
        </ul>
      </div>
    </div>
  );
}

export default QuestionBox;
