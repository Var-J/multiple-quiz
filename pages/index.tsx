import QuestionBox from "@/components/QuestionBox";
import { Question } from "@/typing";
import { Pagination } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Home() {
  const router = useRouter();

  const startQuiz = () => {
    router.push("/question");
  };

  return (
    <div className="h-full bg-slate-200 w-full mx-auto">
      <h1>Get Started</h1>
      <button onClick={startQuiz}>Start</button>
    </div>
  );
}

export default Home;
