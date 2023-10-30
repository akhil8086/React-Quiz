



// import React, { useState } from 'react';
// import Question from './Question';
// import "./Styles.css"

// function Home() {
//   const [quizStarted, setQuizStarted] = useState(false);

//   const startQuiz = () => {
//     setQuizStarted(true);
//   };

//   return (
//     <div className='home'>
//       {quizStarted ? (
   
//         <Question />
//       ) : (
       
//         <div>
//           <h1 className='home_one'>WELCOME</h1>
//           <div>
//             <button
//             className='home_button'
//               onClick={startQuiz} 
//             >
//               Start Quiz
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import Question from './Question';
import "./Styles.css"

function Home() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className='home'>
      {quizStarted ? (
        <Question />
      ) : (
        <div>
          <h1 className='home_one'>WELCOME</h1>
          <div>
            <button className='home_button' onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

