import React from "react";
import Answer from "./Answer";

function Answers(props) {
  return (
    <div>
      <Answer
        option="a"
        answer={props.question.answer_a}
        handleClick={props.handleClick}
        selected={props.currentAns === "a"}
      />
      <Answer
        option="b"
        answer={props.question.answer_b}
        handleClick={props.handleClick}
        selected={props.currentAns === "b"}
      />
      <Answer
        option="c"
        answer={props.question.answer_c}
        handleClick={props.handleClick}
        selected={props.currentAns === "c"}
      />
      <Answer
        option="d"
        answer={props.question.answer_d}
        handleClick={props.handleClick}
        selected={props.currentAns === "d"}
      />
    </div>
  );
}

export default Answers;
