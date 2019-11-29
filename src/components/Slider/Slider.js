import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Close from "./Close";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: this.props.employees,
      current: this.props.current,
      isNext: true
    };

    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
  }

  handlerPrev() {
    let index = this.state.current,
      length = this.state.employees.length;

    if (index < 1) {
      index = length;
    }

    index = index - 1;

    this.setState({
      current: index,
      isNext: false
    });
  }

  handlerNext() {
    let index = this.state.current,
      length = this.state.employees.length - 1;

    if (index === length) {
      index = -1;
    }

    index = index + 1;

    this.setState({
      current: index,
      isNext: true
    });
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "visible";
  }

  render() {
    let index = this.state.current,
      isnext = this.state.isNext,
      employee = this.state.employees[index];

    return (
      <div className="slider-backdrop">
        <div id="slider">
          <CSSTransitionGroup
            transitionName={{
              apear: false,
              enter: isnext ? "enter-next" : "enter-prev",
              enterActive: "enter-active",
              leave: "leave",
              leaveActive: isnext ? "leave-active-next" : "leave-active-prev"
            }}
          >
            <Slide key={index} employee={employee} />
          </CSSTransitionGroup>

          <ArrowLeft prev={this.handlerPrev} />
          <ArrowRight next={this.handlerNext} />
          <Close className="close-button" close={this.props.handleClose} />
        </div>
      </div>
    );
  }
}
