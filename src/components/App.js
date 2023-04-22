import React, { useState, useEffect } from "react";
import Question from "./Question";
import quiz from "../data/quiz";
function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  useEffect(() => {
    // Example usage of useEffect
    console.log("Questions updated:", questions);
  }, [questions]); // Run this effect whenever 'questions' state changes
  function handleQuestionAnswered(selectedAnswer, correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }
  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}
export default App;