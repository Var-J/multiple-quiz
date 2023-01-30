import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <header className="w-full fixed p-4 top-0 left-0 items-center bg-blue-200 shadow-md flex justify-between">
        <h1 className="text-4xl font-bold">QuizBox</h1>
        <button
          onClick={() => signIn()}
          className="bg-green-200 p-4 rounded-xl hover:bg-green-100 transition duration-200"
        >
          Log in
        </button>
      </header>
    );
  }

  return (
    <header className="w-full fixed p-4 top-0 left-0 items-center bg-blue-200 shadow-md flex justify-between">
      <h1 className="text-4xl font-bold">QuizBox</h1>
      <div className="space-x-8 flex">
        <p className="text-lg text-center">Signed in as:<br /><span className="font-bold">{session.user?.name}</span></p>
        <button
          onClick={() => signOut()}
          className="bg-green-200 p-4 rounded-xl hover:bg-green-100 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </header>
  );
}
export default Header;
