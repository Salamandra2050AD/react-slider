import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import CtrlButton from "./CtrlButton";
import Slide from "./Slide";

export default function Team(props) {
  const [current, setCurrent] = useState(props.current);
  const [next, setNext] = useState(true);

  const handlerPrev = () => {
    let length = props.employees.length - 1;
    current >= 1 ? setCurrent(current - 1) : setCurrent(length);
    setNext(false);
  };

  const handlerNext = () => {
    let length = props.employees.length - 1;

    current >= length ? setCurrent(0) : setCurrent(current + 1);
    setNext(true);
  };

  useEffect(() => {
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
