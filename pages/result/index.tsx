import { reset } from "@/slices/answerSlice";
import { RootState } from "@/store";
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

  for (let i = 0; i < 10; i++) {
    if (answer[i].payload === correctAnswer[i].payload) score++;
  }

  const router = useRouter();
  const goBack = () => {
    router.push("/");
  };

  return (
    <div className="">
      <h1 className="text-6xl text-center my-10">Your Score is: {score}/10</h1>
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

export default ResultPage;
