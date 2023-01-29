export interface Question {
    category: string;
    id: string;
    correctAnswer: string;
    incorrectAnswers: Array;
    question: string;
    tags: Array
}