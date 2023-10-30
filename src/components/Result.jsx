import React from "react";

const Result = ({ correctAnswers, totalQuestions }) => {
  const wrongAnswers = totalQuestions - correctAnswers;


  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Wrong Answers: {wrongAnswers}</p>

      <button
      onClick={refreshPage}
      className="Result_button"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;