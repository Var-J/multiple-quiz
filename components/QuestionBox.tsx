import { addAnswer, addCorrectAnswer, addQuestion, moveOn } from "@/slices/answerSlice";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Answers from "./Answers";

function QuestionBox({ questions }: any) {
  const state = useSelector((state: RootState) => state.answer)
  const dispatch = useDispatch()
  console.log(state)

  const { currentQuestion, answers, numberOfQuestions } = state;
  const question = questions[currentQuestion];
  const router = useRouter();

  const answerQuestion = (answer: never) => {
    dispatch(addAnswer(answer))
    dispatch(addCorrectAnswer(questions[currentQuestion].correctAnswer))
    dispatch(addQuestion(questions[currentQuestion].question))
    moveQuestion('next')
  };

  const moveQuestion = (direction: any) => {
    switch (direction) {
      case "next": {
        if (currentQuestion === numberOfQuestions - 1) {
          router.push('/result')
          return;
        }
        dispatch(moveOn())
        break;
      }
    }
  };

  return (
    <div
      className="flex items-center flex-col w-[30rem] h-auto space-y-2 p-10 bg-white/40 rounded-xl"
    >
      <p>
        Question {currentQuestion + 1} of {numberOfQuestions}
      </p>
      <h1 className="text-2xl">{question?.question}</h1>
      <div className="flex space-x-2 w-full">
        <ul className="space-y-10">
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
