import { FaSquare } from "react-icons/fa";
import Answer from "./Answer";
const labels = ["a", "b", "c", "d", "e"];

export default function Answers({ correctAnswer, wrongAnswer, state, answerQuestion }: any) {
  const { currentQuestion } = state;

  
  const allAnswer = [];

  for (let i = 0; i < wrongAnswer?.length; i++) {
    allAnswer.push(wrongAnswer[i]);
  }

  allAnswer.push(correctAnswer);

  return (
    <ul>
      {allAnswer.map((answer, i) => (
        <Answer
          key={i}
          answerQuestion={answerQuestion}
          answerText={answer}
          answerValue={labels[i]}
        />
      ))}
    </ul>
  );
}
