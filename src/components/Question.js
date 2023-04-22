import { useState, useEffect } from "react";
const Question = ({ question, onAnswered }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [timeRemaining, setTimeRemaining] = useState(10);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);
  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    const isCorrect = answerIndex === question.correctIndex;
    onAnswered(isCorrect);
  };
  return (
    <div>
      <p>{question.prompt}</p>
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(index)}
            style={{
              backgroundColor:
                selectedAnswerIndex === index ? "lightblue" : "white",
            }}
          >
            {answer}
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
};
export default Question;