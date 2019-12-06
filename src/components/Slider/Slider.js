import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import styles from "./Slider.module.css";
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
    <div className={styles.sliderBackdrop}>
      <div>
        <CSSTransitionGroup
          transitionName={{
            apear: false,
            enter: next ? styles.enterNext : styles.enterPrev,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: next ? styles.leaveActiveNext : styles.leaveActivePrev
          }}
        >
          <Slide key={current} employee={props.employees[current]} />
        </CSSTransitionGroup>
        <CtrlButton
          style={[styles.midLeft, styles.ctrlBtn]}
          iconType="chevron-left"
          action={handlerPrev}
        />
        <CtrlButton
          style={[styles.midRight, styles.ctrlBtn]}
          iconType="chevron-right"
          action={handlerNext}
        />
        <CtrlButton
          style={[styles.topLeft, styles.ctrlBtn]}
          iconType="times"
          action={props.handleClose}
        />
      </div>
    </div>
  );
}
