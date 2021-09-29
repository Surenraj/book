import React, { Component } from "react";
import "../Css_Pages/course_modules.css";

export default class course_modules extends Component {
  render() {
    return (
      <div className="course-modules container">
        <div className="row ">
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Arrays</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Objects</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Encapsulation</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Polymorphism</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Abstraction</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <h6>Inheritance</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
