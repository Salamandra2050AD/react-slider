import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import CtrlButton from "./CtrlButton";
import Slide from "./Slide";

export default function Team(props) {
  const [current, setCurrent] = useState(props.current);
  const [next, setNext] = useState(true);

  const handlerPrev = () => {
    let index = current,
      length = props.employees.length;

    if (index < 1) {
      index = length;
    }

    setCurrent(index - 1);
    setNext(false);
  };

  const handlerNext = () => {
    let index = current,
      length = props.employees.length - 1;

    if (index === length) {
      index = -1;
    }

    index = index + 1;
    setCurrent(index);

    setNext(true);
  };
  useEffect(() => {
    document.body.classList.add("modal-open");
    document.title = `${props.employees[current].firstName} ${props.employees[current].lastName} - IDH ${props.employees[current].jobTitle}`;
  });

  return (
    <div className="slider-backdrop">
      <div id="slider">
        <CSSTransitionGroup
          transitionName={{
            apear: false,
            enter: next ? "enter-next" : "enter-prev",
            enterActive: "enter-active",
            leave: "leave",
            leaveActive: next ? "leave-active-next" : "leave-active-prev"
          }}
        >
          <Slide key={current} employee={props.employees[current]} />
        </CSSTransitionGroup>
        <CtrlButton type="chevron-left" action={handlerPrev} />
        <CtrlButton type="chevron-right" action={handlerNext} />
        <CtrlButton type="times" action={props.handleClose} />
      </div>
    </div>
  );
}
