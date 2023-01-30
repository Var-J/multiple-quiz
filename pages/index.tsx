import Header from "@/components/Header";
import { reset } from "@/slices/answerSlice";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(reset());
    router.push("/question");
  };

  const session = useSession();

  return (
      <div className="mx-auto w-full flex justify-center flex-col items-center h-screen">
        <Header/>
        <div className="w-96 rounded-xl h-48 bg-white/70 flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-10">Multiple Quiz</h1>
          <button
            disabled={session.status == "unauthenticated"}
            onClick={startQuiz}
            className={`${session.status == "authenticated" ? '' : 'opacity-30 hover:bg-red-400'} p-2 mb-2 px-10 bg-blue-300 rounded-xl hover:bg-blue-200 
            transition duration-200 text-xl`}
          >
            Start
          </button>
          <p className={`${session.status == 'authenticated' ? 'hidden' : 'block'} text-red-700`}>Please make sure to login first</p>
        </div>
      </div>
  );
}

export default Home;
