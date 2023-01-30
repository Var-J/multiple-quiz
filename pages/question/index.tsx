import QuestionBox from "@/components/QuestionBox";
import { Question } from "@/typing";
import React from "react";

type Props = {
  questions: Question[]
}

function QuestionPage({ questions }: Props) {  

  return (
    <div className="flex w-full space-y-10 p-10 justify-center items-center">
      <QuestionBox questions={questions} />
    </div>
  );
}

export default QuestionPage;

export async function getStaticProps() {
  const questions = await fetch(
    "https://the-trivia-api.com/api/questions?limit=10&difficulty=easy"
  ).then((res) => res.json());
  return {
    props: {
      questions,
    }, // will be passed to the page component as props
  };
}
