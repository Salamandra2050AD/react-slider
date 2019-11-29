import React, { Component } from "react";
import Slider from "../components/Slider/Slider";
import employees from "../employees";
import iconMsg from "../assets/icon_msg.png";

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees,
      show: false,
      current: 0
    };
  }
  showModal = index => {
    this.setState({ show: true, current: index });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        {this.state.show ? (
          <Slider
            handleClose={this.hideModal}
            current={this.state.current}
            employees={this.state.employees}
          ></Slider>
        ) : null}

        <div className="container">
          <h1>Meet our team</h1>

          {employees.map((employee, index) => {
            return (
              <div key={index}>
                <img
                  className="avatar"
                  onClick={() => this.showModal(index)}
                  src={employee.avatar}
                  alt=""
                />
                <img className="mail" src={iconMsg} alt="" />
                <p className="name">
                  {employee.firstName + " " + employee.lastName}
                </p>
                <p className="job-title">{employee.jobTitle}</p>
                <p className="place">{employee.place}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
