import React from "react";

function Answer(props) {
  let classes = ["answer"];

  if (props.selected) {
    classes.push("selected");
  }
  return (
    <div>
      <button
        value={props.option}
        className={classes.join(" ")}
        onClick={props.handleClick}
      >
        <span className="option">{props.option}</span> {props.answer}
      </button>
    </div>
  );
}

export default Answer;
