import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Question from "./components/Question";
//import Answer from "./components/Answer";
import Answers from "./components/Answers";

function App() {
  const [currentQues, setCurrentQues] = useState(0);
  const [currentAns, setCurrentAns] = useState(""); //currently selected answer/option
  const [answers, setAnswers] = useState([]); //answers from the user
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState();
  const [marks, setMarks] = useState(0);

  const questions = [
    {
      id: 1,
      question: "How many elements does a react component return?",
      answer_a: "2 elements",
      answer_b: "1 element",
      answer_c: "Multiple elements",
      answer_d: "None of the above",
      correct_ans: "c",
    },
    {
      id: 2,
      question:
        "In react what is used to pass data to a component from outside?",
      answer_a: "setState",
      answer_b: "render with arguments",
      answer_c: "props",
      answer_d: "PropTypes",
      correct_ans: "c",
    },
    {
      id: 3,
      question: "ReactJS uses _______ to increase performance",
      answer_a: "Original DOM",
      answer_b: "Virtual DOM",
      answer_c: "Both 1 & 2",
      answer_d: "None of the above",
      correct_ans: "b",
    },
    {
      id: 4,
      question: "Who developed React JS?",
      answer_a: "Apple",
      answer_b: "Facebook",
      answer_c: " Twitter",
      answer_d: "Google",
      correct_ans: "b",
    },
    {
      id: 5,
      question: "Everything in React is a __________",
      answer_a: "Module",
      answer_b: "Component",
      answer_c: "Package",
      answer_d: "Class",
      correct_ans: "b",
    },
  ];

  const question = questions[currentQues];

  const handleClick = (e) => {
    setCurrentAns(e.target.value);
    setError("");
  };

  const renderResultsProgress = (question, answer) => {
    if (question.correct_ans === answer.answer) {
      // setMarks(marks + 1);
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Failed</span>;
  };
  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };

  const renderResultsData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question} - {renderResultsProgress(question, answer)}
        </div>
      );
    });
  };
  const restart = () => {
    setAnswers([]);
    setCurrentAns("");
    setCurrentQues(0);
    setShowResults(false);
    setMarks(0);
  };
  const next = () => {
    const answer = { questionId: question.id, answer: currentAns };
    if (!currentAns) {
      setError("Please select an option");
      return;
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrentAns("");

    if (questions[currentQues].correct_ans === answers[currentQues].answer) {
      setMarks(marks + 1);
    }

    if (currentQues + 1 < questions.length) {
      setCurrentQues(currentQues + 1);
    } else {
      setShowResults(true);
    }
  };
  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <h2>You scored :{marks}</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Result Ques={questions.length} presentQues={currentQues + 1} />
        <Question q={question.question} />
        {renderError()}
        <Answers
          question={question}
          currentAns={currentAns}
          handleClick={handleClick}
        />
        <button className="btn btn-primary" onClick={next}>
          Confirm and continue
        </button>
      </div>
    );
  }
}

export default App;
