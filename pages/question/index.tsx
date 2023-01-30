import Header from "@/components/Header";
import QuestionBox from "@/components/QuestionBox";
import { Question } from "@/typing";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {
  questions: Question[];
};

function QuestionPage({ questions }: Props) {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl">Access Denied</h1>
        <Link href="/" className="p-4 bg-red-200 rounded-xl mt-5 hover:bg-red-100 transition duration-200">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="flex w-full space-y-10 p-10 mt-24 justify-center items-center">
      <Header />
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
