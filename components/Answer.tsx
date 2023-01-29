

export default function Answer(props: any) {
    const { answerQuestion, answerText, answerValue } = props;
    
    return (
        <li>
            <button
                className="p-2 flex items-center gap-2 hover:text-blue-900"
                onClick={() => answerQuestion(answerValue)}
            >
                {`${answerValue}. ${answerText}`}
            </button>
        </li>
    );
}
