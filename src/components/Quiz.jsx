import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quiz from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz({ onSelect }) {
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  //   const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //   setAnswerState("answered");
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
      // console.log(selectedAnswer);

      //   setTimeout(() => {
      //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //       setAnswerState("correct");
      //     } else {
      //       setAnswerState("wrong");
      //     }

      //     setTimeout(() => {
      //       setAnswerState("");
      //     }, 2000);
      //   }, 1000);
    },
    // [activeQuestionIndex]
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
