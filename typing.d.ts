export interface Question {
    category: string;
    id: string;
    correctAnswer: any;
    incorrectAnswers: string[];
    question: string;
    tags: Array
}


export interface answer {
    type: string;
    payload: string;
}