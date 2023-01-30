import { reset } from "@/slices/answerSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(reset())
    router.push("/question");
  };

  return (
    <div className="mx-auto w-full flex justify-center flex-col items-center h-screen">
      <div className="w-96 rounded-xl h-48 bg-white/70 flex flex-col items-center justify-center space-y-10">
        <h1 className="text-4xl">Multiple Quiz</h1>
        <button onClick={startQuiz} className="p-2 px-10 bg-blue-300 rounded-xl hover:bg-blue-200 transition duration-200 text-xl">Start</button>
      </div>
    </div>
  );
}

export default Home;
