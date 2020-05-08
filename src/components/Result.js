import React from "react";

function Result(props) {
  //const [presentQues, Ques] = props;
  return (
    <div>
      <h2>
        Question {props.presentQues} of {props.Ques}
      </h2>
    </div>
  );
}

export default Result;
