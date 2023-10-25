



import React, { useState } from 'react';
import Question from './Question';

function Home() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      {quizStarted ? (
   
        <Question />
      ) : (
       
        <div>
          <h1 style={{ fontSize: "30px", color: "black", fontFamily:"bold" }}>WELCOME</h1>
          <div>
            <button
              style={{
                border: "2px solid black",
                background: "lightgreen",
                margin: "50px",
                fontSize: "20px",
                padding: "30px 40px",
                borderRadius:"15px",
                color:"black"

              }}
              onClick={startQuiz} 
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

