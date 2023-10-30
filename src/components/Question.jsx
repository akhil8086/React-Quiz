

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Result from "./Result";
// import "./Styles.css"

// const baseURL = "https://opentdb.com/api.php?amount=5&type=multiple";

// const Question = () => {
 
//   const [quiz, setQuiz] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0); 
//   const [totalQuestions, setTotalQuestions] = useState(0); 
//   const [shuffledAnswers, setShuffledAnswers] = useState([]);


// useEffect(() => {
//     axios
//       .get(baseURL)
//       .then((response) => {
//         setQuiz(response.data.results);
//         setTotalQuestions(response.data.results.length);
//         const currentQuestion = response.data.results[currentQuestionIndex];
//         const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
//         setShuffledAnswers(shuffle(answers));
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [currentQuestionIndex]);
  
  
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) { 
//       const j = Math.floor(Math.random() * (i + 1)); 
//       [array[i], array[j]] = [array[j], array[i]]; 
//     } 
//     return array; 
//   }
  
  

//   const handleClick = (answer) => {
//     if (selectedAnswer === null) {
//       setSelectedAnswer(answer);

//       if (answer === quiz[currentQuestionIndex].correct_answer) {
//         setCorrectAnswers(correctAnswers + 1); 
//       }
//     }
//   };

//   const handleNext = () => {
//     setSelectedAnswer(null);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };


//     if (!quiz) return null;
  
//     if (currentQuestionIndex >= totalQuestions) {
//       return <Result correctAnswers={correctAnswers} totalQuestions={totalQuestions} />;
//     }
  
//     const currentQuestion = quiz[currentQuestionIndex];
  
//     return (
//       <div >
//         <h2>{currentQuestion.question}</h2>
//         <div>
//           {shuffledAnswers.map((answer, i) => (
//             <button
//             className="button"
//               key={i}
//               onClick={() => handleClick(answer)}
//               style={{
//                 backgroundColor: selectedAnswer === answer ? (answer === currentQuestion.correct_answer ? "lightgreen" : "red") : " "
//               }}
//               disabled={selectedAnswer !== null}
//             >
//               {answer}
//             </button>
//           ))}
//         </div>
  
//         <button
//         className="next_button"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     );
//   };
  
//   export default Question;








import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Styles.css";

const baseURL = "https://opentdb.com/api.php?amount=5&type=multiple";

const Question = () => {
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setQuiz(response.data.results);
        setTotalQuestions(response.data.results.length);
        const currentQuestion = response.data.results[currentQuestionIndex];
        const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        setShuffledAnswers(shuffle(answers));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);

      if (answer === quiz[currentQuestionIndex].correct_answer) {
        setCorrectAnswers(correctAnswers + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (currentQuestionIndex + 1 < totalQuestions) {
      const currentQuestion = quiz[currentQuestionIndex + 1];
      const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      setShuffledAnswers(shuffle(answers));
    }

    setCurrentQuestionNumber(currentQuestionNumber + 1); 
  };

  if (!quiz) return null;

  if (currentQuestionIndex >= totalQuestions) {
    return <Result correctAnswers={correctAnswers} totalQuestions={totalQuestions} />;
  }

  const currentQuestion = quiz[currentQuestionIndex];

  return (
    <div>
      <h3>Question {currentQuestionNumber}</h3>
      <h2>{currentQuestion.question}</h2>
      <div>
        {shuffledAnswers.map((answer, i) => (
          <button
            className="button"
            key={i}
            onClick={() => handleClick(answer)}
            style={{
              backgroundColor: selectedAnswer === answer ? (answer === currentQuestion.correct_answer ? "lightgreen" : "red") : " ",
            }}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        ))}
      </div>

      <button className="next_button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Question;

  















