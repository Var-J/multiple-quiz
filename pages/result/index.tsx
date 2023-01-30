import Header from "@/components/Header";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

function ResultPage() {
  const answer = useSelector((state: RootState) => state.answer.answers);
  const correctAnswer = useSelector(
    (state: RootState) => state.answer.correctAnswers
  );
  const question = useSelector((state: RootState) => state.answer.question);

  const result = [];

  for (let i = 0; i < 10; i++) {
    result.push({
      question: question[i],
      answer: answer[i],
      correctAnswer: correctAnswer[i],
    });
  }

  let score = 0;

  if (answer[0] == undefined) {
  } else {
    for (let i = 0; i < 10; i++) {
      if (answer[i].payload === correctAnswer[i].payload) score++;
    }
  }

  const router = useRouter();
  const goBack = () => {
    router.push("/");
  };

  const session = useSession();

  if (session.status === "unauthenticated" || answer[0] == undefined) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl">Access Denied</h1>
        <Link
          href="/"
          className="p-4 bg-red-200 rounded-xl mt-5 hover:bg-red-100 transition duration-200"
        >
          Go Back
        </Link>
      </div>
    );
  }

  if (session.status === "authenticated") {
    return (
      <div className="mt-24">
        <Header />
        <h1 className="text-6xl text-center my-10">
          Your Score is: {score}/10
        </h1>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {result.map((result, i) => (
            <li
              key={i}
              className="p-4 w-[30rem] rounded-xl space-y-4 bg-white/60"
            >
              <h3 className="text-sm">Question number {i + 1}</h3>
              <p className="text-xl">{result.question.payload}</p>
              <div className="text-lg">
                <p>Correct Answer: {result.correctAnswer.payload}</p>
                <p>
                  Your Answer:{" "}
                  <span
                    className={`${
                      result.answer.payload === result.correctAnswer.payload
                        ? "bg-green-200"
                        : "bg-red-200"
                    }`}
                  >
                    {result.answer.payload}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full text-right p-4">
          <button
            onClick={goBack}
            className="py-4 px-10 rounded-xl bg-green-400 hover:bg-green-300 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default ResultPage;
