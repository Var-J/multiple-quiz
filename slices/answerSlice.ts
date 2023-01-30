import { answer } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AnswerState {
  currentQuestion: number;
  question: answer[];
  answers: answer[];
  numberOfQuestions: number;
  correctAnswers: answer[];
}

// Define the initial state using that type
const initialState: AnswerState = {
  currentQuestion: 0,
  question: [],
  answers: [],
  numberOfQuestions: 10,
  correctAnswers: [],
};

export const answerSlice = createSlice({
  name: "answer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCorrectAnswer: (state, answer: any) => {
      state.correctAnswers.push(answer);
    },
    addAnswer: (state, answer: any) => {
      state.answers.push(answer);
    },
    addQuestion: (state, answer: any) => {
        state.question.push(answer)
    },  
    moveOn: (state) => {
      state.currentQuestion += 1;
    },
    reset: (state) => {
      state.currentQuestion = 0
      state.question = [];
      state.answers = [];
      state.correctAnswers = [];
    }
  },
});

export const { addCorrectAnswer, addAnswer, moveOn, addQuestion, reset } = answerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAnswer = (state: RootState) => {
    state.answer.currentQuestion,
    state.answer.answers,
    state.answer.numberOfQuestions,
    state.answer.correctAnswers
    state.answer.question
}

export default answerSlice.reducer;
