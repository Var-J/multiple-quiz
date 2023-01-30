

export default function Answer(props: any) {
    const { answerQuestion, answerText, answerValue } = props;
    
    return (
        <li>
            <button
                className="py-2 hover:text-blue-900"
                onClick={() => answerQuestion(answerText)}
            >
                {`${answerValue}. ${answerText}`}
            </button>
        </li>
    );
}
